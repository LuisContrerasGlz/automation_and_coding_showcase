// Comparison helpers used to grade a user's function output against a test case's expected value.

export function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return a == null && b == null;
  if (typeof a === "number" && typeof b === "number") {
    return Math.abs(a - b) < 1e-9;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, i) => deepEqual(item, b[i]));
  }
  if (typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((key) => Object.prototype.hasOwnProperty.call(b, key) && deepEqual(a[key], b[key]));
  }
  return false;
}

// Compares two arrays as sets: same distinct elements, and `actual` must not contain duplicates.
export function setEqualNoDup(actual, expected) {
  if (!Array.isArray(actual)) return false;
  const actualSet = new Set(actual);
  if (actualSet.size !== actual.length) return false;
  const expectedSet = new Set(expected);
  if (actualSet.size !== expectedSet.size) return false;
  for (const item of expectedSet) {
    if (!actualSet.has(item)) return false;
  }
  return true;
}

export function compare(mode, actual, expected) {
  if (mode === "setEqualNoDup") return setEqualNoDup(actual, expected);
  return deepEqual(actual, expected);
}
