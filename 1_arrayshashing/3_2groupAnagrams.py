from collections import defaultdict
from typing import List

class SolutionSort:
    def groupAnagramSort(strs):
    res = defaultdict(list) 
    
    for word in strs:
        sorted_word = ''.join(sorted(word)) # sorted is a built in python function, returns a new list(array)
        res[sorted_word].append(word)

    return list(res.values())


def groupAnagramsHS(strs):
    res = defaultdict(list)

    for word in strs:
        count = [0] * 26
        for char in word:
            count[ord(char) - ord('a')] +=1
        res[tuple(count)].append(word)
    
    return list(res.values())