/* 153. Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
 

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/

/* Properly reading the question lets us know that rotating means taking the last number and moving it to the front.
*/

// Brute Force

var findMinBF = function(nums){
  return Math.min(...nums);
}

/* Fairly straight forward for the BF solution to get a O(N) complexity.
Only novel thing is using spread.

How do we do binary search though if it isn't sorted the usual way?
*/

/* The trick here is to look at the array and noticing there is pivot point (where it's not longer ascending order).
We can thus infer that we have two sorted sub arrays where one array's values is always larger than the others.
This is not unlike binary search now is it?

Also note this only works in rotated arrays.
*/

// Binary Search

var findMinBinarySearch = function (nums){
  let left = 0;
  let right = nums.length - 1;
  let result = nums[0];

  while (left <= right) {
    if (nums[left] <= nums[right]){ // if the current sub array is sorted
      result = Math.min(result, nums[left]); // early loop break to return
      break;
    }

    let middle = Math.floor((left + right)/ 2); // go to the middle/fix the middle 
    result = Math.min(result, nums[middle]);

    if (nums[middle] >= nums[left]){ // if the middle is greater than the left, search the right
      left = middle + 1; // by moving the left poitner to the right
    } else {
      right = middle - 1; // else vice versa
    }
  }

  return result
}