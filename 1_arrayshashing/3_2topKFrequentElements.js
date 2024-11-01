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

// Bucket sort - still a hashmap

var topKFrequentBucketSort = function(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of nums) { // create counting map
      count[n] = (count[n] || 0) + 1;
  }

  for (const n in count) { // add the numbers from the map into proper bucket
      freq[count[n]].push(parseInt(n));
  }

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) { // push from the buckets for K times
      for (const n of freq[i]) {
          res.push(n);
          if (res.length === k) { //when it reaches K times, return the result
              return res;
          }
      }
  }
};

/* We are using contextual information about the answer sought to do the sorting in a faster manner.
We know for each number that it appears at minimum once & a maximum frequency that a number can occur is the length of the array.

Therefore we set the range of the counts (frequency/the keys) from 0 - nums.length + 1 (since length is 0 indexed) & we also create an empty array as the bucket. (line 48)

Please note bucket sort only really works with bounded indexes & that it only really works with a good distribution of the inputs across the range. It slows down if all the sorting ends up in the same bucket. 
*/

// Heap 

var topKFrequentHeap = function (nums,k) {
  const count = {};
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
  }

  const heap = new MinPriorityQueue(x => x[1]);
  for(const [num, cnt] of Object.entries(count)){
      heap.enqueue([num, cnt]);
      if (heap.size() > k) heap.dequeue();
  }

  const res = [];
  for(let i = 0; i < k; i++) {
      const [num, cnt] = heap.dequeue();
      res.push(num)
  }
  return res; 
}

/* I'm adding this here since this is an answer variant however I haven't really studied heaps in depth to be able to sufficiently put an explanation here.

Heaps are really good at min/maxes which a sorted frequency comparison would fit neatly into.
*/
