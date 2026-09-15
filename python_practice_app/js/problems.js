// Practice exercises derived from coding_ex_PYTHON/*.py.
// Each alternative approach to the same underlying problem is its own entry so it can be
// practiced independently. `tests` values were traced by hand against the original solutions.

export const problems = [
  {
    id: "fizzbuzz",
    group: "FizzBuzz",
    title: "FizzBuzz",
    description:
      "Write a function that takes a positive integer n and prints, for each number from 1 to n: " +
      "\"Fizz\" for multiples of 3, \"Buzz\" for multiples of 5, \"FizzBuzz\" for multiples of both, " +
      "and otherwise the number itself.",
    constraintNote: null,
    functionName: "fizzbuzz",
    outputMode: "stdout",
    starterCode:
`def fizzbuzz(n):
    """Print Fizz/Buzz/FizzBuzz (or the number) for each number from 1 to n."""
    pass
`,
    tests: [
      { args: [15], expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] },
      { args: [1], expected: ["1"] },
      { args: [5], expected: ["1","2","Fizz","4","Buzz"] },
      { args: [3], expected: ["1","2","Fizz"] },
    ],
  },
  {
    id: "reverse-string-slicing",
    group: "Reverse String",
    title: "Reverse String (slicing)",
    description: "Write a function that takes a string and returns it reversed.",
    constraintNote: null,
    functionName: "reverse_string",
    starterCode:
`def reverse_string(s):
    """Return s reversed."""
    pass
`,
    tests: [
      { args: ["hello"], expected: "olleh" },
      { args: [""], expected: "" },
      { args: ["a"], expected: "a" },
      { args: ["Python"], expected: "nohtyP" },
      { args: ["12345"], expected: "54321" },
    ],
  },
  {
    id: "reverse-string-no-slice",
    group: "Reverse String",
    title: "Reverse String (no slicing)",
    description: "Write a function that takes a string and returns it reversed.",
    constraintNote: "Do not use slicing (s[::-1]) or the built-in reversed(). Build the reversed string yourself.",
    functionName: "reverse_string_no_slice",
    starterCode:
`def reverse_string_no_slice(s):
    """Return s reversed, without using slicing."""
    pass
`,
    tests: [
      { args: ["hello"], expected: "olleh" },
      { args: [""], expected: "" },
      { args: ["a"], expected: "a" },
      { args: ["Python"], expected: "nohtyP" },
      { args: ["12345"], expected: "54321" },
    ],
  },
  {
    id: "count-all-occurrences",
    group: "Character Counting",
    title: "Count All Character Occurrences",
    description:
      "Write a function that takes a string and returns a dictionary mapping each character " +
      "that appears in the string to the number of times it appears.",
    constraintNote: null,
    functionName: "count_occurrences",
    starterCode:
`def count_occurrences(s):
    """Return a dict mapping each character in s to how many times it appears."""
    pass
`,
    tests: [
      { args: ["hello"], expected: { h: 1, e: 1, l: 2, o: 1 } },
      { args: [""], expected: {} },
      { args: ["aaa"], expected: { a: 3 } },
      { args: ["ab ab"], expected: { a: 2, b: 2, " ": 1 } },
    ],
  },
  {
    id: "count-specific-builtin",
    group: "Character Counting",
    title: "Count Specific Character (using .count())",
    description: "Write a function that takes a string and a character, and returns how many times that character appears in the string.",
    constraintNote: null,
    functionName: "count_specific_occurrence",
    starterCode:
`def count_specific_occurrence(s, char):
    """Return how many times char appears in s."""
    pass
`,
    tests: [
      { args: ["hello", "l"], expected: 2 },
      { args: ["hello", "z"], expected: 0 },
      { args: ["mississippi", "s"], expected: 4 },
      { args: ["", "a"], expected: 0 },
    ],
  },
  {
    id: "count-specific-manual",
    group: "Character Counting",
    title: "Count Specific Character (manual)",
    description: "Write a function that takes a string and a character, and returns how many times that character appears in the string.",
    constraintNote: "Do not use str.count().",
    functionName: "count_specific_occurrence_no_count",
    starterCode:
`def count_specific_occurrence_no_count(s, char):
    """Return how many times char appears in s, without using str.count()."""
    pass
`,
    tests: [
      { args: ["hello", "l"], expected: 2 },
      { args: ["hello", "z"], expected: 0 },
      { args: ["mississippi", "s"], expected: 4 },
      { args: ["", "a"], expected: 0 },
    ],
  },
  {
    id: "average-two-lists-basic",
    group: "Average of Two Lists",
    title: "Average of Two Lists (basic)",
    description: "Write a function that takes two lists of numbers and returns the average of all the numbers combined. You may assume the two lists are not both empty.",
    constraintNote: null,
    functionName: "average_lists",
    starterCode:
`def average_lists(list1, list2):
    """Combine list1 and list2 and return the average of all the numbers."""
    pass
`,
    tests: [
      { args: [[10, 20, 30], [40, 50, 60]], expected: 35.0 },
      { args: [[1, 2, 3], [4, 5, 6]], expected: 3.5 },
      { args: [[5], [5]], expected: 5.0 },
    ],
  },
  {
    id: "average-two-lists-empty",
    group: "Average of Two Lists",
    title: "Average of Two Lists (handle empty)",
    description:
      "Write a function that takes two lists of numbers and returns the average of all the numbers " +
      "combined. If both lists are empty, return 0 instead of raising an error.",
    constraintNote: null,
    functionName: "average_lists_emp",
    starterCode:
`def average_lists_emp(list1, list2):
    """Combine list1 and list2 and return their average, or 0 if both are empty."""
    pass
`,
    tests: [
      { args: [[], []], expected: 0 },
      { args: [[10, 20], [30, 40]], expected: 25.0 },
      { args: [[10], []], expected: 10.0 },
      { args: [[10, 20, 30], [40, 50, 60]], expected: 35.0 },
    ],
  },
  {
    id: "average-two-lists-no-extra-list",
    group: "Average of Two Lists",
    title: "Average of Two Lists (no extra list)",
    description:
      "Write a function that takes two lists of numbers and returns the average of all the numbers " +
      "combined. If both lists are empty, return 0 instead of raising an error.",
    constraintNote: "Do not build a combined/third list. Track the running sum and count directly from list1 and list2.",
    functionName: "average_lists_without3",
    starterCode:
`def average_lists_without3(list1, list2):
    """Return the average of all numbers in list1 and list2 without combining them into a new list."""
    pass
`,
    tests: [
      { args: [[], []], expected: 0 },
      { args: [[10, 20], [30, 40]], expected: 25.0 },
      { args: [[10], []], expected: 10.0 },
      { args: [[10, 20, 30], [40, 50, 60]], expected: 35.0 },
    ],
  },
  {
    id: "remove-duplicates-set",
    group: "Remove Duplicates",
    title: "Remove Duplicates (using set)",
    description: "Write a function that takes a list and returns a new list with duplicate values removed. The order of the result does not matter.",
    constraintNote: null,
    functionName: "remove_dupl_set",
    starterCode:
`def remove_dupl_set(check_list):
    """Return check_list with duplicates removed. Order does not matter."""
    pass
`,
    tests: [
      { args: [[1, 1, 2, 3]], expected: [1, 2, 3], compare: "setEqualNoDup" },
      { args: [[]], expected: [], compare: "setEqualNoDup" },
      { args: [[5, 5, 5, 5]], expected: [5], compare: "setEqualNoDup" },
      { args: [["a", "b", "a", "c", "b"]], expected: ["a", "b", "c"], compare: "setEqualNoDup" },
    ],
  },
  {
    id: "remove-duplicates-order-fromkeys",
    group: "Remove Duplicates",
    title: "Remove Duplicates (preserve order, dict.fromkeys)",
    description:
      "Write a function that takes a list and returns a new list with duplicate values removed, " +
      "preserving the order in which each value first appeared.",
    constraintNote: null,
    functionName: "remove_dupl_in_order",
    starterCode:
`def remove_dupl_in_order(check_list2):
    """Return check_list2 with duplicates removed, preserving first-occurrence order."""
    pass
`,
    tests: [
      { args: [[1, 1, 2, 3, 2]], expected: [1, 2, 3] },
      { args: [[]], expected: [] },
      { args: [["a", "b", "a", "c", "b"]], expected: ["a", "b", "c"] },
      { args: [[3, 2, 1, 3, 2, 1]], expected: [3, 2, 1] },
    ],
  },
  {
    id: "remove-duplicates-order-manual",
    group: "Remove Duplicates",
    title: "Remove Duplicates (preserve order, manual)",
    description:
      "Write a function that takes a list and returns a new list with duplicate values removed, " +
      "preserving the order in which each value first appeared.",
    constraintNote: "Do not use set() or dict().",
    functionName: "remove_dupl_manual",
    starterCode:
`def remove_dupl_manual(check_list):
    """Return check_list with duplicates removed, preserving order, without using set() or dict()."""
    pass
`,
    tests: [
      { args: [[1, 1, 2, 3, 2]], expected: [1, 2, 3] },
      { args: [[]], expected: [] },
      { args: [["a", "b", "a", "c", "b"]], expected: ["a", "b", "c"] },
      { args: [[3, 2, 1, 3, 2, 1]], expected: [3, 2, 1] },
    ],
  },
  {
    id: "find-duplicates",
    group: "Find Duplicates",
    title: "Find Duplicates in a List",
    description:
      "Write a function that takes a list and returns a list of the values that appear more than " +
      "once, in the order each was first identified as a duplicate. Each duplicate value should appear only once in the result.",
    constraintNote: null,
    functionName: "duplicate_finder",
    starterCode:
`def duplicate_finder(checklist):
    """Return the values in checklist that appear more than once."""
    pass
`,
    tests: [
      { args: [[1, 2, 3, 2, 4, 1, 2]], expected: [2, 1] },
      { args: [["apple", "apple", "banana", "orange", "apple", "kiwi", "banana"]], expected: ["apple", "banana"] },
      { args: [[1, 2, 3]], expected: [] },
      { args: [[]], expected: [] },
    ],
  },
  {
    id: "largest-second-largest",
    group: "Largest / Second Largest",
    title: "Find Largest and Second-Largest Number",
    description:
      "Write a function that takes a list of numbers and returns a tuple (largest, second_largest). " +
      "If the list has fewer than 2 elements, return (None, None).",
    constraintNote: null,
    functionName: "find_largest_and_second_largest",
    starterCode:
`def find_largest_and_second_largest(numbers):
    """Return (largest, second_largest), or (None, None) if numbers has fewer than 2 elements."""
    pass
`,
    tests: [
      { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: [9, 6] },
      { args: [[1, 2]], expected: [2, 1] },
      { args: [[5]], expected: [null, null] },
      { args: [[7]], expected: [null, null] },
    ],
  },
  {
    id: "palindrome-slicing",
    group: "Palindrome Check",
    title: "Palindrome Check (slicing)",
    description:
      "Write a function that takes a string and returns True if it is a palindrome (reads the same " +
      "forwards and backwards), ignoring spaces and letter case, and False otherwise.",
    constraintNote: null,
    functionName: "is_palindrome",
    starterCode:
`def is_palindrome(s):
    """Return True if s is a palindrome, ignoring spaces and case."""
    pass
`,
    tests: [
      { args: ["racecar"], expected: true },
      { args: ["hello"], expected: false },
      { args: ["A man a plan a canal Panama"], expected: true },
      { args: [""], expected: true },
    ],
  },
  {
    id: "palindrome-no-slicing",
    group: "Palindrome Check",
    title: "Palindrome Check (no slicing)",
    description:
      "Write a function that takes a string and returns True if it is a palindrome (reads the same " +
      "forwards and backwards), ignoring spaces and letter case, and False otherwise.",
    constraintNote: "Do not use slicing (s[::-1]).",
    functionName: "is_palindrome_noslice",
    starterCode:
`def is_palindrome_noslice(s):
    """Return True if s is a palindrome, ignoring spaces and case, without using slicing."""
    pass
`,
    tests: [
      { args: ["racecar"], expected: true },
      { args: ["hello"], expected: false },
      { args: ["A man a plan a canal Panama"], expected: true },
      { args: [""], expected: true },
    ],
  },
  {
    id: "count-vowels",
    group: "Vowels",
    title: "Count Vowels",
    description: "Write a function that takes a string and returns how many vowels (a, e, i, o, u, both uppercase and lowercase) it contains.",
    constraintNote: null,
    functionName: "count_vowels",
    starterCode:
`def count_vowels(s):
    """Return the number of vowels in s."""
    pass
`,
    tests: [
      { args: ["hello"], expected: 2 },
      { args: [""], expected: 0 },
      { args: ["xyz"], expected: 0 },
      { args: ["AEIOUaeiou"], expected: 10 },
      { args: ["Programming"], expected: 3 },
    ],
  },
  {
    id: "find-vowels",
    group: "Vowels",
    title: "Find Vowels",
    description: "Write a function that takes a string and returns a list of the vowels (a, e, i, o, u, both uppercase and lowercase) it contains, in the order they appear.",
    constraintNote: null,
    functionName: "find_vowels",
    starterCode:
`def find_vowels(s):
    """Return a list of the vowels in s, in order."""
    pass
`,
    tests: [
      { args: ["hello"], expected: ["e", "o"] },
      { args: [""], expected: [] },
      { args: ["xyz"], expected: [] },
      { args: ["AEIOUaeiou"], expected: ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"] },
      { args: ["Programming"], expected: ["o", "a", "i"] },
    ],
  },
  {
    id: "remove-spaces-replace",
    group: "Remove Spaces",
    title: "Remove Spaces (using replace)",
    description: "Write a function that takes a string and returns a copy of it with all space characters removed.",
    constraintNote: null,
    functionName: "remove_spaces",
    starterCode:
`def remove_spaces(s):
    """Return s with all spaces removed."""
    pass
`,
    tests: [
      { args: ["   Hello, World!   "], expected: "Hello,World!" },
      { args: ["a b c"], expected: "abc" },
      { args: [""], expected: "" },
      { args: ["NoSpacesHere"], expected: "NoSpacesHere" },
      { args: ["   "], expected: "" },
    ],
  },
  {
    id: "remove-spaces-split-join",
    group: "Remove Spaces",
    title: "Remove Spaces (split and join)",
    description: "Write a function that takes a string and returns a copy of it with all space characters removed.",
    constraintNote: "Use str.split() and str.join() — not str.replace().",
    functionName: "remove_spaces_split_join",
    starterCode:
`def remove_spaces_split_join(s):
    """Return s with all spaces removed, using split() and join()."""
    pass
`,
    tests: [
      { args: ["   Hello, World!   "], expected: "Hello,World!" },
      { args: ["a b c"], expected: "abc" },
      { args: [""], expected: "" },
      { args: ["NoSpacesHere"], expected: "NoSpacesHere" },
      { args: ["   "], expected: "" },
    ],
  },
  {
    id: "remove-spaces-manual",
    group: "Remove Spaces",
    title: "Remove Spaces (manual)",
    description: "Write a function that takes a string and returns a copy of it with all space characters removed.",
    constraintNote: "Do not use str.replace(), str.split(), or str.strip() — build the result character by character.",
    functionName: "remove_whitespace",
    starterCode:
`def remove_whitespace(s):
    """Return s with all spaces removed, without using replace/split/strip."""
    pass
`,
    tests: [
      { args: ["   Hello, World!   "], expected: "Hello,World!" },
      { args: ["a b c"], expected: "abc" },
      { args: [""], expected: "" },
      { args: ["NoSpacesHere"], expected: "NoSpacesHere" },
      { args: ["   "], expected: "" },
    ],
  },
  {
    id: "find-longest-word",
    group: "Find Longest Word",
    title: "Find Longest Word in a Sentence",
    description:
      "Write a function that takes a sentence (a string of words separated by spaces) and returns " +
      "the longest word in it. If there is a tie, return whichever of the tied words appears first.",
    constraintNote: null,
    functionName: "find_longest_word",
    starterCode:
`def find_longest_word(sentence):
    """Return the longest word in sentence; on a tie, return the first one found."""
    pass
`,
    tests: [
      { args: ["This is a sample sentence with some long words like extraordinary."], expected: "extraordinary." },
      { args: ["The quick brown fox"], expected: "quick" },
      { args: [""], expected: "" },
      { args: ["single"], expected: "single" },
      { args: ["a bb ccc dddd"], expected: "dddd" },
    ],
  },
];
