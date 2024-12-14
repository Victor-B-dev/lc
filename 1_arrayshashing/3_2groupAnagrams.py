from collections import defaultdict
def groupAnagramSort(strs):
    res = defaultdict(list) 
    
    for word in strs:
        sorted_word = ''.join(sorted(word)) # sorted is a built in python function, returns a new list(array)
        res[sorted_word].append(word)

    return list(res.values())
