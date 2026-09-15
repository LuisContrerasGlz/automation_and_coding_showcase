# Count vowels - given a string, count how many vowels it contains.

def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

# find vowels 
def find_vowels(s):
    vowelstofind = []
    vowels = "aeiouAEIOU"

    for char in s:
        if char in vowels:
            vowelstofind.append(char)

    return vowelstofind