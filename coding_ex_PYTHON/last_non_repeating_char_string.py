# Write code to find the last non-repeating character in a string.

def last_non_repeating_char(input_string):
    non_repeating_chars = []

    for char in input_string:
        if input_string.count(char) == 1:
            non_repeating_chars.append(char)

    if non_repeating_chars:
        return non_repeating_chars[-1]

    return None

print(last_non_repeating_char("abcdda"))