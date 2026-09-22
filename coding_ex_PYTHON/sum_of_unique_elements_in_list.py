# Get the sum of unique elements in a list

def sum_of_unique_elements(lst):
    unique_elements = set(lst)  
    return sum(unique_elements)  

print(sum_of_unique_elements([1, 2, 3, 4, 5]))