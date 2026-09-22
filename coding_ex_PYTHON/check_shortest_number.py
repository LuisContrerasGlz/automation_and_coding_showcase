# Check for the shortest number

# With function

my_list = [10, 5, 7, 22, 13, 19]
smallest_number = min(my_list)
print(smallest_number)


# Without function

def find_smallest_number(lst):
    # Initialize with positive infinity
    smallest = float('inf')  

    for num in lst:
        if num < smallest:
            smallest = num

    return smallest

# Example usage
my_list = [10, 5, 7, 22, 13, 19]
smallest_number = find_smallest_number(my_list)
print(smallest_number)

