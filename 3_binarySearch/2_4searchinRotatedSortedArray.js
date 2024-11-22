/* Leetcode #33Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

 

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

*/

// Brute Force

var searchBF = function(nums, target){
  for (let i=0; i < nums.length; i++){
    if (nums[i] === target){
      return i
    }
  }
  return -1; // not found
}

/* O(n) solution honestly isn't bad but as per the question itself, this can be better, ergo binary search.

Similar to finding the minimum, we can approach the problem as subarrays.
*/

// Binary Search

var searchBinarySearch = function (nums, target){
  let left = 0; 
  let right = nums.length - 1;

  while (left < right){ // find which sorted subarray which has the lower set of numbers
    let middle = Math.floor((left + right) / 2)
    if (nums[middle] > nums[right]){
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  let pivot = left; // set the pivot so we know where the left/right are
  left = 0;
  right = nums.length - 1;

  // compare the target against the pivot, which sorted subarray could the target be in
  if (target >= nums[pivot] && target <= nums[r]){
    left = pivot;
  } else{
    right = pivot - 1
  }

  // implement binary search
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[m] === target){
      return m;
    } else if (nums[m] < target){
      left = middle + 1;
    } else{
      right = middle - 1;
    }
  }

  return -1 // if not found return -1
}

// Binary Search - One Pass

var searchBSOP = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) { // early return
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
        }
    } else {
      if (target < nums[mid] || target > nums[r]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
}