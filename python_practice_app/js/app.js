import { createEditor, getCode, setCode } from "./editor.js";
import { problems } from "./problems.js";

const RUN_TIMEOUT_MS = 5000;

let worker = null;
let workerReady = null;
let currentProblem = null;
let editorCreated = false;

const sidebarEl = document.getElementById("sidebar");
const titleEl = document.getElementById("problem-title");
const descriptionEl = document.getElementById("problem-description");
const constraintEl = document.getElementById("problem-constraint");
const editorContainer = document.getElementById("editor-container");
const resultsEl = document.getElementById("results");
const runBtn = document.getElementById("run-btn");
const resetBtn = document.getElementById("reset-btn");
const statusEl = document.getElementById("status");

function createWorker() {
  const w = new Worker(new URL("./pyodide-worker.js", import.meta.url), { type: "module" });
  const ready = new Promise((resolve) => {
    const onMessage = (event) => {
      if (event.data.type === "ready") {
        w.removeEventListener("message", onMessage);
        resolve();
      }
    };
    w.addEventListener("message", onMessage);
  });
  return { w, ready };
}

function initWorker() {
  const { w, ready } = createWorker();
  worker = w;
  workerReady = ready;
  statusEl.textContent = "Loading Python runtime...";
  runBtn.disabled = true;
  ready.then(() => {
    statusEl.textContent = "Ready";
    runBtn.disabled = false;
  });
}

function renderSidebar() {
  const groups = new Map();
  for (const problem of problems) {
    if (!groups.has(problem.group)) groups.set(problem.group, []);
    groups.get(problem.group).push(problem);
  }
  sidebarEl.innerHTML = "";
  for (const [groupName, items] of groups) {
    const details = document.createElement("details");
    details.open = true;
    const summary = document.createElement("summary");
    summary.textContent = groupName;
    details.appendChild(summary);
    const list = document.createElement("ul");
    for (const problem of items) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = problem.title;
      btn.className = "exercise-btn";
      btn.dataset.id = problem.id;
      btn.addEventListener("click", () => selectProblem(problem.id));
      li.appendChild(btn);
      list.appendChild(li);
    }
    details.appendChild(list);
    sidebarEl.appendChild(details);
  }
}

function selectProblem(id) {
  const problem = problems.find((p) => p.id === id);
  if (!problem) return;
  currentProblem = problem;
  titleEl.textContent = problem.title;
  descriptionEl.textContent = problem.description;
  constraintEl.textContent = problem.constraintNote || "";
  constraintEl.hidden = !problem.constraintNote;
  resultsEl.innerHTML = "";

  if (!editorCreated) {
    createEditor(editorContainer, problem.starterCode);
    editorCreated = true;
  } else {
    setCode(problem.starterCode);
  }

  document.querySelectorAll(".exercise-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
}

function resetCurrent() {
  if (!currentProblem) return;
  setCode(currentProblem.starterCode);
  resultsEl.innerHTML = "";
}

function formatValue(value) {
  return JSON.stringify(value);
}

function renderResults({ results, timeout }) {
  resultsEl.innerHTML = "";

  if (timeout) {
    const p = document.createElement("p");
    p.className = "result-fail";
    p.textContent = "Time limit exceeded. Check for infinite loops in your code.";
    resultsEl.appendChild(p);
    return;
  }

  const passCount = results.filter((r) => r.passed).length;
  const summary = document.createElement("p");
  summary.className = "results-summary";
  summary.textContent = `${passCount} / ${results.length} tests passed`;
  resultsEl.appendChild(summary);

  results.forEach((r, i) => {
    const item = document.createElement("div");
    item.className = r.passed ? "test-case pass" : "test-case fail";

    const header = document.createElement("div");
    header.className = "test-case-header";
    header.textContent = `Test ${i + 1}: ${r.passed ? "PASS" : "FAIL"}`;
    item.appendChild(header);

    if (!r.passed) {
      const detail = document.createElement("div");
      detail.className = "test-case-detail";
      if (r.error) {
        detail.textContent = `Error: ${r.error.summary}`;
        if (r.error.full) {
          const details = document.createElement("details");
          const summaryEl = document.createElement("summary");
          summaryEl.textContent = "Show full traceback";
          details.appendChild(summaryEl);
          const pre = document.createElement("pre");
          pre.textContent = r.error.full;
          details.appendChild(pre);
          detail.appendChild(details);
        }
      } else {
        detail.textContent = `Input: ${formatValue(r.args)} — Expected: ${formatValue(r.expected)} — Got: ${formatValue(r.actual)}`;
      }
      item.appendChild(detail);
    }

    resultsEl.appendChild(item);
  });
}

async function runTests() {
  if (!currentProblem || !worker) return;
  runBtn.disabled = true;
  statusEl.textContent = "Running...";
  resultsEl.innerHTML = "";

  const userCode = getCode();
  const activeWorker = worker;
  let settled = false;

  const timeoutId = setTimeout(() => {
    if (settled) return;
    settled = true;
    activeWorker.terminate();
    renderResults({ timeout: true });
    statusEl.textContent = "Restarting Python runtime...";
    initWorker();
  }, RUN_TIMEOUT_MS);

  await workerReady;
  if (activeWorker !== worker) return; // worker was replaced (e.g. previous timeout) before this run started

  const handleMessage = (event) => {
    if (settled) return;
    if (event.data.type !== "result") return;
    settled = true;
    clearTimeout(timeoutId);
    activeWorker.removeEventListener("message", handleMessage);
    renderResults({ results: event.data.results });
    statusEl.textContent = "Ready";
    runBtn.disabled = false;
  };
  activeWorker.addEventListener("message", handleMessage);

  activeWorker.postMessage({
    type: "run",
    functionName: currentProblem.functionName,
    userCode,
    tests: currentProblem.tests,
    outputMode: currentProblem.outputMode,
  });
}

runBtn.addEventListener("click", runTests);
resetBtn.addEventListener("click", resetCurrent);

renderSidebar();
initWorker();
selectProblem(problems[0].id);
