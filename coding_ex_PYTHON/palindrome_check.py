# Check if a string is a palindrome

def is_palindrome(s):
    # Remove spaces and convert to lowercase
    s = s.replace(" ", "").lower()
    # Check if the string is equal to its reverse
    return s == s[::-1]

def is_palindrome_noslice(s):
    # Remove spaces and convert to lowercase
    s = s.replace(" ", "").lower()
    # Check if the string is equal to its reverse without using slicing
    reversed_s = ""
    for char in s:
        reversed_s = char + reversed_s
    return s == reversed_s