class SolutionSort:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {};
    
        for num in nums:
            count[num] = 1 + count.get(num, 0)

        array = []
        for num, num_count in count.items():
            array.append([num_count, num])
            array.sort()

        result = []
        while len(res) < k:
            result.append(array.pop()[1])
        return result