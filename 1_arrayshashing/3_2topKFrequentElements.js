// Leetcode Problem # 347 - Top K Frequent Elements
/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]


Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// Sorting - hashmap

var topKFrequentSort = function (nums, k) {
  const count = {};
  for (const num of nums) { // store the value as [number/frequency]
      count[num] = (count[num] || 0) + 1; 
  } 

  const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);   // change the map from [number/frequency it shows up] to [frequency/number] 
  arr.sort((a, b) => b[0] - a[0]);   // and then sort from most frequent to least frequent

  return arr.slice(0, k).map(pair => pair[1]); // return a sliced array from the most frequent to the desired times K
}

/* I think the easy part is knowing yes we know to use a map to build the relationship between value & counts.
The tricky thing here is realizing we can turn the map into an array & then flip the map key value pair to "value-key" for the sort (line 32).

Sorting causes the logN addition to the time complexity
*/

// Heap 

// Bucket sort - Hashmap
