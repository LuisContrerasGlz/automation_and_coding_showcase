# Python Practice App

A small local web app for practicing the coding exercises in `../coding_ex_PYTHON/` without
seeing the solution. Pick an exercise, read the description, write your own solution in the
editor, and check it against a set of test cases — then reset and try again whenever you want.

## Running it

Pyodide (the Python runtime) fetches files over the network, which browsers block when a page
is opened directly from disk (`file://`). So the app needs to be served, not double-clicked:

```bash
cd python_practice_app
python3 -m http.server 8000
```

Then open **http://localhost:8000** in a browser. Stop the server with `Ctrl+C` when you're done.

There's nothing to install — no `npm install`, no build step. Every dependency (Python runtime,
code editor) loads from a CDN at runtime.

## What it does

- The sidebar lists exercises grouped by problem (e.g. "Reverse String" has a slicing version
  and a no-slicing version, each practiced separately).
- Selecting an exercise shows its description and a starter function stub — never the solution.
- **Run Tests** grades your code against several test cases and shows pass/fail with the
  expected vs. actual output (or the error, if your code raised one).
- **Reset** wipes the editor back to the starter stub so you can redo the exercise later.
- Nothing is saved between visits — every reload/reset starts fresh.

## How it works

The whole app is static HTML/CSS/vanilla JS (no backend, no build tooling). Your Python code
never leaves the browser:

- **[Pyodide](https://pyodide.org)** — a full CPython build compiled to WebAssembly — runs your
  submitted code directly in the browser.
- It runs inside a **Web Worker** (`js/pyodide-worker.js`), not the main thread. This is what
  lets the app recover from an infinite loop: the main thread (`js/app.js`) starts a 5-second
  timer on every run, and if the worker hasn't responded by then, it's terminated and a fresh
  one is spun up for the next attempt.
- Each run executes your code into a **fresh Python namespace**, so nothing you define in one
  exercise (or one attempt) leaks into the next.
- Your function is called once per test case with that test's arguments. Its return value is
  converted to a plain JS value and compared against the expected value (`js/grading.js`).
  Two comparison modes exist: exact structural equality (the default), and set-equality for
  exercises where the output order isn't meaningful (e.g. dedup-via-`set()`).
- **FizzBuzz** is graded differently: since the original exercise prints rather than returns,
  that one test captures the function's printed output (via Pyodide's stdout hook) instead of
  a return value.
- The code editor is **[CodeMirror 6](https://codemirror.net/)**, loaded from esm.sh (jsdelivr's
  bundle endpoint causes duplicate-instance issues with CodeMirror's internal packages).

## Adding a new exercise

Exercises live in `js/problems.js` as a flat array. Add an entry with:

| Field | Purpose |
|---|---|
| `id` | Unique, e.g. `"reverse-string-slicing"` |
| `group` | Groups variants of the same problem together in the sidebar |
| `title` | Sidebar label — can hint at the technique (e.g. "(no slicing)") |
| `description` | Problem prose shown above the editor — avoid revealing the technique here |
| `constraintNote` | Optional rule shown under the description, e.g. "Do not use slicing." |
| `functionName` | The exact function name the grader will call |
| `starterCode` | The blank stub shown in the editor (signature + docstring + `pass`) |
| `tests` | Array of `{ args, expected, compare? }` — `compare: "setEqualNoDup"` for order-independent list results |
| `outputMode` | Omit for return-based grading, or `"stdout"` to grade printed output instead |

Derive `tests` by tracing the real logic in the corresponding `coding_ex_PYTHON/*.py` file —
that folder stays untouched and is only ever used as reference material.

## File structure

```
python_practice_app/
  index.html            Page layout: sidebar + description + editor + results
  css/styles.css         Styling
  js/problems.js         Exercise data (descriptions, starter code, test cases)
  js/editor.js            CodeMirror 6 setup
  js/pyodide-worker.js    Loads Pyodide and grades submissions inside a Web Worker
  js/grading.js           Comparison helpers used by the worker
  js/app.js               Sidebar rendering, worker messaging, results rendering
```
