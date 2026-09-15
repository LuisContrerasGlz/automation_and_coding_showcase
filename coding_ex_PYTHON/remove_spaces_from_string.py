# Removing spaces from a string.
def remove_spaces(s):
    return s.replace(" ", "")

print(remove_spaces("   Hello, World!   "))

# With split and join
def remove_spaces_split_join(s):
    return "".join(s.split())

print(remove_spaces_split_join("   Hello, World!   "))

# remove without using strip
def remove_whitespace(s):
    result = ""

    for char in s:
        if char != " ":
            result = result + char

    return result

print(remove_whitespace("   Goodbye, World!   "))