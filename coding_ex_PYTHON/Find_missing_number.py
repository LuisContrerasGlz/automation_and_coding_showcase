# Find the missing number in a sequence of numbers from 1 to n.
# Example: [1, 2, 3, 5, 6] -> 4

def find_missing_number(nums):
    n = len(nums) + 1
    expected_sum = sum(range(1, n + 1))
    actual_sum = sum(nums)

    return expected_sum - actual_sum

print(find_missing_number([1, 2, 3, 5, 6]))
print(find_missing_number([1, 2, 4, 5, 6]))
print(find_missing_number([2, 3, 4, 5, 6]))
print(find_missing_number([1, 2, 3, 4, 5]))