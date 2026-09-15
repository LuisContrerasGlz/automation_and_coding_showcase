import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.mjs";
import { compare } from "./grading.js";

let pyodideInstance = null;

async function init() {
  pyodideInstance = await loadPyodide();
  self.postMessage({ type: "ready" });
}

const initPromise = init();

function formatError(err) {
  const full = err && err.message ? err.message : String(err);
  const lines = full.trim().split("\n");
  const summary = lines[lines.length - 1];
  return { summary, full };
}

self.onmessage = async (event) => {
  const { type, functionName, userCode, tests, outputMode } = event.data;
  if (type !== "run") return;

  await initPromise;
  const pyodide = pyodideInstance;

  // Fresh globals per run so nothing leaks between submissions or exercises.
  const freshNamespace = pyodide.globals.get("dict")();

  let setupError = null;
  try {
    pyodide.runPython(userCode, { globals: freshNamespace });
  } catch (err) {
    setupError = formatError(err);
  }

  if (setupError) {
    freshNamespace.destroy();
    self.postMessage({
      type: "result",
      results: tests.map((t) => ({
        passed: false,
        args: t.args,
        expected: t.expected,
        actual: null,
        error: setupError,
      })),
    });
    return;
  }

  const fn = freshNamespace.get(functionName);
  if (!fn) {
    freshNamespace.destroy();
    self.postMessage({
      type: "result",
      results: tests.map((t) => ({
        passed: false,
        args: t.args,
        expected: t.expected,
        actual: null,
        error: { summary: `Function "${functionName}" is not defined.`, full: "" },
      })),
    });
    return;
  }

  const results = [];
  for (const test of tests) {
    const entry = { args: test.args, expected: test.expected };
    try {
      if (outputMode === "stdout") {
        // Grade on what the function prints rather than what it returns.
        const capturedLines = [];
        pyodide.setStdout({ batched: (msg) => capturedLines.push(msg) });
        try {
          fn(...test.args);
        } finally {
          pyodide.setStdout({});
        }
        entry.actual = capturedLines;
      } else {
        const rawResult = fn(...test.args);
        const actual =
          rawResult != null && typeof rawResult.toJs === "function"
            ? rawResult.toJs({ dict_converter: Object.fromEntries })
            : rawResult;
        if (rawResult != null && typeof rawResult.destroy === "function") {
          rawResult.destroy();
        }
        entry.actual = actual === undefined ? null : actual;
      }
      entry.passed = compare(test.compare, entry.actual, test.expected);
    } catch (err) {
      entry.actual = null;
      entry.passed = false;
      entry.error = formatError(err);
    }
    results.push(entry);
  }

  fn.destroy();
  freshNamespace.destroy();

  self.postMessage({ type: "result", results });
};
