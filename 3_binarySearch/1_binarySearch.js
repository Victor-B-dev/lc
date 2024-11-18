/* Leetcode # 704 Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/* Binary search comes in variety of flavors & is an extremely common problem. It runs in logn time (we keep dividing successively inputs by 2), which compared to usual brute force searches that are likely On^2, it's a massive time scaling save.

This file will have more solutions than necessary to introduce us to new concepts.

Binary searches usually rely on the input array being sorted because part of the basic premise of the search is to quickly and efficiently eliminating needless computations based on that assumption.

As such future problems will rely on us learning about sorting.
*/

// Recursive Binary Search

var searchRecursive = function (nums, target) {

  var binarySearch = function (left, right, nums, target) { // helper function
    if (left > right ) return -1;
    let middle = Math.floor ((left + right) / 2); // go to the middle
    /* There's also an integer overflow issue if the left and right values are extremely high. the workaround is as follows:

    middle = left + Math.floor((right - left) / 2); adding half the distance between them to the left index
    */

    if (nums[middle] === target) return middle; // if the middle is the target, escape 
    if (target > nums[middle]) { // if target is greater than the middle
      return binarySearch(middle + 1, right, nums, target) // recursiveley search to the right
    } else {
      return binarySearch(left, middle - 1, nums, target) // otherwise search to the left, you could also write the converse of this situation
    }
  }

  return binarySearch(0, nums.length - 1, nums, target) // call helper function on input
}

/* We will probably not end up using this solution often since recursion takes up extra space since additional recursive calls take up memory until it reaches base case.
*/

// Iterative Binary Search

var searchIterative = function (nums, target){
  let left = 0
  let right = nums.length - 1;

  while (left <= right){
    let middle = Math.floor ((left + right) / 2);
    if (target < nums[middle]) { // if the target is less than the middle
      right = middle - 1; // we move the right pointer to the left of the middle point - 1 so we search the left where the target is
    } else if (target > nums[middle]) { // if the target is greater than the midpoint
      left = middle + 1; // we we shift the left pointer
    } else {
      return middle // eventually the only number remaining should be the middle 
    }
  }
  return -1; // if target isn't found, return -1 per problem instruction, however note return -1 is a very common way to show something isn't found e.g. indexOf() method
}

/* In this version, since we're not recursively calling but "dumping" prior space used, the space complexity is O(1).
*/

// Built in tool

var searchIndexOf = function(nums, target) {
  
  return nums.indexOf(target)
}

/* without writing the logic itself, indexOf is behind the scenes, a binary search
*/

/* One last note is that is common terminology that while something may not be in the input array, we may want to find the closest element to that target.

In this case you may the "lower bound" or "upper bound" result of a target so you can narrow down future search results.

There's good use cases of not exact but close enough that is likely encountered scenarios.
*/