"""
Given a list of numbers and a target value, 
Find the two numbers whose sum equals the target and return their indices.

nums = [2, 7, 11, 15]
target = 9

[0, 1]

"""

def two_sum(nums, target):
    seen = {}

    for i, num in enumerate(nums):
        needed = target - num

        if needed in seen:
            return [seen[needed], i]

        seen[num] = i

"""
2 Sum variation, only the values are returned, not the indices.

Given a list of numbers and a target value, 
Find the two numbers whose sum equals the target

nums = [2, 7, 11, 15]
target = 9
[2, 7]

"""

def two_sum_values(nums, target):
    seen = set()

    for num in nums:
        needed = target - num

        if needed in seen:
            return [needed, num]

        seen.add(num)