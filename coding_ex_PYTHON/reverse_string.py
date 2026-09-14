# Reverse a String
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))

# Without using slicing
def reverse_string_no_slice(s):
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

print(reverse_string_no_slice("hello"))