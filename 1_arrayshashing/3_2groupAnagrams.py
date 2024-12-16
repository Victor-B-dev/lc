from collections import defaultdict
from typing import List

class SolutionSort:
    def groupAnagram(self, strs: List[str]) -> List[list[str]]:
        res = defaultdict(list) 
    
        for word in strs:
            sorted_word = ''.join(sorted(word)) # sorted is a built in python function, returns a new list(array)
            res[sorted_word].append(word)

        return list(res.values())


class SolutionHashSet:
    def groupAnagram(self, strs: List[str]) -> List[list[str]]:
        res = defaultdict(list)

        for word in strs:
            count = [0] * 26
            for char in word:
                count[ord(char) - ord('a')] +=1
            res[tuple(count)].append(word)
    
        return list(res.values())