# Find the longest word in a sentence

def find_longest_word(sentence):
    words = sentence.split()
    longest = ""

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest

print(find_longest_word("This is a sample sentence with some long words like extraordinary."))