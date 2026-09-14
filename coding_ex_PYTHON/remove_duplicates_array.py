# Removing duplicates from list
def remove_dupl(check_list):
    return list(set(check_list))

# Removing and keeping the original order
def remove_dupl_in_order(check_list2):
    return list(dict.fromkeys(check_list2))

# Without set or dict

def remove_dupl(check_list):
    result = []

    for item in check_list:
        if item not in result:
            result.append(item)

    return result

