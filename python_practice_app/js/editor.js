// esm.sh (not jsdelivr's +esm) is used here because it resolves the full dependency
// graph consistently across these three packages, avoiding duplicate @codemirror/state
// / @codemirror/view instances that break CodeMirror's internal instanceof checks.
import { EditorView, basicSetup } from "https://esm.sh/codemirror@6.0.1";
import { python } from "https://esm.sh/@codemirror/lang-python@6.1.6";
import { oneDark } from "https://esm.sh/@codemirror/theme-one-dark@6.1.2";

let view = null;

export function createEditor(container, initialCode) {
  view = new EditorView({
    doc: initialCode,
    extensions: [basicSetup, python(), oneDark],
    parent: container,
  });
  return view;
}

export function getCode() {
  return view ? view.state.doc.toString() : "";
}

export function setCode(code) {
  if (!view) return;
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: code },
  });
}
