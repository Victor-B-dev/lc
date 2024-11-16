/* Leetcode Problem # 15 - 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/* The brute force solution is 3 For Loops however one constraint in the answer "Notice that the solution set must not contain duplicate triplets." means logic needs to be built in to prevent duplicates. From doing the previous twoSum problems, I feel one should have the inclination that the solution to start with either hashmap or twopointers.

Notably because there are three loops to account for, a BF solution of On^3 will scale beyond poorly.

Eliminating duplicates can be done one of two ways - sorting & checking previous value (e.g. i === i - 1) OR using a hashset/ hashmap.

Also an extra note - this could be more similar to twoSum where a target is given but we're given the target here being 0 so coming back to look at this code perhaps in the future, I'll wonder why there's so many 0s in the part of the code that is the logic for the two pointers. Yeah that's the reason why.
*/

// Two Pointers Solution

var threeSumTP = function (nums) {
  nums.sort((a,b) => a - b);
  const result = [];

  for (let i = 0; i< nums,s.length; i++){
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip current number if its the same as previous, ignore doing this at first index

    let left = i + 1; // the left pointer begins after the first number which is set as i in the loop
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0){
        right--; // if the sum is greater, decrement right
      } else if (sum < 0) {
        left++; // if the sum is less, increase left
      } else {
        result.push([nums[i], nums[left], nums[right]]) // if neither of those, i.e. it's equal, push to result array
        left++; // subsequently increment & decrement
        right--;
        while (left < right && nums[left] === nums[left - 1]){ // make sure that the two pointers don't cross & that there is no dupe value on the left (see line 50)
          left++;
        } 
      }

    }
  }
  return result
}

/* I think this is the first problem thus far where we expect an On^2 answer (or is it n^2 logn since we're sorting, then again big O usually refers to the worst part of the problem so one N is the for loop then another N is for the two pointers).

The space complexity can be O(1) or O(n) depending on sorting.

There is a hashmap solution that can be implemented but it's a bit too read.

I really like this problem as building on previous problems completed.
*/