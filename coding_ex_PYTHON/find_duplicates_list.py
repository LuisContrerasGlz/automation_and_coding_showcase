# Find duplicates in an array/list.


def duplicate_finder(checklist):
    duplicates = []
    seen = set()

    for item in checklist:
        if item in seen and item not in duplicates:
            duplicates.append(item)
        seen.add(item)

    return duplicates

print(duplicate_finder([1, 2, 3, 2, 4, 1, 2]))
print(duplicate_finder(["apple", "apple", "banana", "orange", "apple", "kiwi", "banana"]))