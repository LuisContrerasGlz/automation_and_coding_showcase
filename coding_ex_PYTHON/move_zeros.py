# Move Zeros - taking an array and moving all 0 values to the end while keeping the order of the non-zero numbers.

def move_zeros(nums):
    result = []

    for num in nums:
        if num != 0:
            result.append(num)

    zeros = len(nums) - len(result)

    for i in range(zeros):
        result.append(0)

    return result

print(move_zeros([0, 1, 0, 3, 12]))