"""
Find the needle in the haystack.

You are given an array of shuffled words. 
Somewhere in the array, there is a word `"needle"`. 
You need to find the word and print its position.

"""

def find_needle_ifs(words_list):
    if "needle" in words_list:
        position = words_list.index("needle")
        return f"Found the needle at position {position}"
    else:
        return "Needle not found in the haystack"