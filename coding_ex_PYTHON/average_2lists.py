# combine two lists and calculate the average of all numbers.

def average_lists(list1, list2):
    combined = list1 + list2
    return sum(combined) / len(combined)

print(average_lists([10, 20, 30], [40, 50, 60]))

# Checking if lists are empty

def average_lists_emp(list1, list2):
    combined = list1 + list2

    if len(combined) == 0:
        return 0

    return sum(combined) / len(combined)

print(average_lists_emp([], []))

# Without a 3rd list

def average_lists_without3(list1, list2):
    total = sum(list1) + sum(list2)
    count = len(list1) + len(list2)

    if count == 0:
        return 0

    return total / count

print(average_lists_without3([10, 20, 30], [40, 50, 60]))   

