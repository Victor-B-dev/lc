def hasDuplicateBF(nums) -> bool:
    for i in range(len(nums)):
        for j in range (i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
        return False
    
def hasDuplicateSorting(nums) -> bool:
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False

def hasDuplicateHS(nums) -> bool:
    hashset = set()
    for num in nums:
        if num in hashset:
            return True
        hashset.add(num)
    return False

