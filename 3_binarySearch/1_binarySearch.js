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

// Solution - Recursive BFS

var searchRecursive = function (nums, target) {

  var binarySearch = function (left, right, nums, target) { // helper function
    if (left > right ) return -1;
    let middle = Math.floor ((left + right) / 2); // go to the middle

    if (nums[middle] === target) return middle; // if the middle is the target, escape 
    if (nums[middle] < target) { // if the middle number is less than the target
      return binarySearch(middle + 1, right, nums, target) // recursiveley search to the right
    } else {
      return binarySearch(left, middle - 1, nums, target) // otherwise search to the left, you could also write the converse of this situation
    }
  }

  return binarySearch(0, nums.length - 1, nums, target) // call helper function on input
}