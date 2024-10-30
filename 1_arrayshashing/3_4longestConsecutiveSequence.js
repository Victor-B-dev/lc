// Leetcode problem # 128
/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

// 1. Brute Force

var longestConsecutiveBruteForce = function (nums) {
  let res = 0;
  const store = new Set(nums);

  for (let num of nums) {
      let streak = 0, curr = num;
      while (store.has(curr)) {
          streak++;
          curr++;
      }
      res = Math.max(res, streak);
  }
  return res;
}

/* Note this answer would be unacceptable due to the problem asking for O(n) time.
We create a hashset out of the given array.
We check each number in the array against the hashset.
If the number exists in the hash set, then we see if the +1 (next conse #) is also in the hashset. If it is, we check the next and also iterate the streak counter.

The problem lies in that we are checking every single number of the given array and then "re-doing" work when checking for consecutive numbers.
Ex - [100,4,200,1,3,2]
From outside looking in, we know that the longest streak will be 4 because 1-2-3-4 are in the array but because the information is not considered, our code does additional work from not making use of contextual information (additional conditions). 

This leads us to a more optimized solution, sorting.
*/

// Sorting 
var longestConsecutiveSort = function (nums) {
  if (nums.length === 0) {
      return 0;
  }

  nums.sort((a, b) => a - b); // sorting numerically least to greatest, if you don't pass in a function, it's sorted as strings
  
  let res = 0, curr = nums[0], streak = 0, i = 0;

  while (i < nums.length) {
      if (curr !== nums[i]) {
          curr = nums[i];
          streak = 0;
      }
      while (i < nums.length && nums[i] === curr) {
          i++;
      }
      streak++;
      curr++;
      res = Math.max(res, streak);
  }
  return res;
}

/* Here we added an easy early return (don't try to run code if the array is empty) that could've been included in the brute force.

This is a little confusing at first.
using [1, 2, 3, 4, 100, 200]

curr = 1, streak = 0
i moves to 2 (past the 1)
streak becomes 1
curr becomes 2
res = 1

// Second iteration:
curr(2) matches nums[1], so good
i moves to 3 (past the 2)
streak becomes 2
curr becomes 3
res = 2

The code is moving in one pass through the array, it adds to the streak & current number and resets when the current number doesn't match the previous.

Time - O(nlogn)
Space - O(1) 

*/

// 3. Hashset - "branching"

var longestConsecutiveHashSet = function(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
      if (!numSet.has(num - 1)) {
          let length = 1;
          while (numSet.has(num + length)) {
              length++;
          }
          longest = Math.max(longest, length);
      }
  }
  return longest;
}

/* Faster than sorting but takes up additional space.
Time - O(n)
Space - O(n)

Create a hashset with the array of nums.
[1, 2, 3, 4, 100, 200]

If we look at the array, we know 1, 100, 200 are the potentially beginnings of a streak.

So we can think of it as check each number, then see if the -1 of that number is in the set.
E.g. look up 3, is 2 in there?, if not, create a variable (length) as a counter because we know it's the beginning of a streak.

Counting the streak is then simple with a while loop, check if there is +1 to the currentNum, then check the next +1 and count the streak.

Compare the max streak vs the current streak, keep the longer one.

This branching answer is faster because the lookups with a hashset are amortized O(1) so the complexity faster is in how long the given array is.

The trick with this solution from looking outside in is being able to look at the context of what consecutive is asking for (+1 or -1) and building that into the solution. Intuitively similar to sort, we'd want to count from the lowest value to the highest to consider a streak, hence the check to the left of -1 & then seeing how long the right goes.

*/


// 4. Hashmap answer

var longestConsecutiveHashMap = function(nums) {
  const numMap = new Map();
  let longest = 0;

  for (let num of nums) {
      if (!numMap.has(num)) { // if the number doesn't exist
          numMap.set(num, (numMap.get(num - 1) || 0) + (numMap.get(num + 1) || 0) + 1); // add the number as key, the sequence as +1
          numMap.set(num - (numMap.get(num - 1) || 0), numMap.get(num)); // update left sequence
          numMap.set(num + (numMap.get(num + 1) || 0), numMap.get(num)); // update right sequence
          longest = Math.max(longest, numMap.get(num));
      }
  }
  return longest;
};

/* Similar to the hashset answer without the implicit hashset rulesets.
Harder to read & a bit confusing to read

For each number of array,
check if the number exists,
if it doesn't set that number into the map, as a key value pair with the value being the sequence length (i.e. does the +1 & the -1 exist?)
Add those keys if they don't, also update the sequence length (value) with previous values.

We are using contextual information as we pass through the array to dynamically update the counter of sequences for each number.

It might help to see an example so:
given [1, 3, 2, 4]

our final map would be:
numMap: { 1:4,
        2:4,
        3:4,
        4:4 }

Each number would be tied to the longest sequence it's included in.
*/