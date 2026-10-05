# Find the last non-repeating character in a string.
# Go through each character, count how many times it appears in the entire string, and return the last one whose count is 1

def last_non_repeating_char(input_string):
    last_char = None

    for char in input_string:
        if input_string.count(char) == 1:
            last_char = char

    return last_char

print(last_non_repeating_char("swiss"))