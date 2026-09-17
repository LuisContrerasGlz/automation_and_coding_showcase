"""
Given a list:

Example:
[10, 20, 30, 20, 40, 10, 50]

Task: Find the first element that appears more than once

20

"""

def first_duplicate(lst):
    seen = set()
    for num in lst:
        if num in seen:
            return num
        seen.add(num)
    # No element appeared twice; `seen` only tracks values during the search.
    return None

print(first_duplicate([10, 20, 30, 20, 40, 10, 50]))