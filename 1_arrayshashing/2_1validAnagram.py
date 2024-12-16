class SolutionSort:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)


class SolutionHashTable:
    def isAnagram(self, s: str, t:str) -> bool:
        if len(s) != len(t):
            return False
    
        countS, countT = {}, {}

        for i in range(len(s)):
            countS(s[i]) = 1 + countS.get(s[i],0)
            countT(t[i]) = 1 + countS.get(s[i],0)
        return countS == countT