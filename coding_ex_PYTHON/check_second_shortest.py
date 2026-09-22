# Check for the shortest number

# Without function

def find_smallest_number(lst):
    # Initialize with positive infinity
    smallest = float('inf')
    second_smallest = float('inf')

    for num in lst:
        if num < smallest:
            second_smallest = smallest
            smallest = num
        elif num < second_smallest and num != smallest:
            second_smallest = num

    return second_smallest

# Example usage
my_list = [10, 5, 7, 22, 13, 19]
second_smallest_number = find_smallest_number(my_list)
print(second_smallest_number)

