# Find the first non-repeating character in a string.
# Go through each character, count how many times it appears in the entire string, and return the first one whose count is 1

def first_non_repeating_char(input_string):
    for char in input_string:
        if input_string.count(char) == 1:
            return char

    return None

print(first_non_repeating_char("swiss"))