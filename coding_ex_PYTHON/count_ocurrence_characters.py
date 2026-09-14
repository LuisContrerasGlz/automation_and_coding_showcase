# Count occurrence of characters
def count_occurrences(s):
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    return char_count

print(count_occurrences("hello"))

# Count the ocurrence of a specific character

def count_specific_occurrence(s, char):
    return s.count(char)

print(count_specific_occurrence("hello", "l"))

# Without using the count() method
def count_specific_occurrence_no_count(string_to_check, char):
    count = 0
    for c in string_to_check:
        if c == char:
            count += 1
    return count

print(count_specific_occurrence_no_count("hello", "l"))