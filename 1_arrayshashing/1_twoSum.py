from typing import List

class SolutionBF:
    def twoSum (self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if (nums[i] + nums[j] == target):
                    return [i,j]
        return []


class SolutionHashmap:
    def twoSum (self, nums: List[int], target: int) -> List[int]:
        num_map = {}
    
        for i, num in enumerate(nums):
            difference = target - num
            if difference in num_map:
                return [num_map[difference], i];
            num_map[num] = i
        return []