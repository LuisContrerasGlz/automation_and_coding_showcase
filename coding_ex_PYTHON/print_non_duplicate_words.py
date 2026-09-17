"""
Write code to print only non-duplicate words.

Input:
"a = "roshan is automation tester & roshan is ui
tester"'"

Expected Output:

"automation & ui"
"""

def print_non_duplicate_words(input_string):
    words = input_string.split()
    result = []

    for word in words:
        if words.count(word) == 1:
            result.append(word)

    return " ".join(result)

text = "roshan is automation tester & roshan is ui tester"

print(print_non_duplicate_words(text))

text2 = "hello world hello python programming world"
print(print_non_duplicate_words(text2))