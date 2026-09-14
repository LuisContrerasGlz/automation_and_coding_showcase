# Find the largest and second largest numbers in a list
def find_largest_and_second_largest(numbers):
    if len(numbers) < 2:
        return None, None  # Not enough elements to find largest and second largest

    largest = float('-inf')
    second_largest = float('-inf')

    for num in numbers:
        if num > largest:
            second_largest = largest
            largest = num
        elif largest > num and num > second_largest:
            second_largest = num

    return largest, second_largest