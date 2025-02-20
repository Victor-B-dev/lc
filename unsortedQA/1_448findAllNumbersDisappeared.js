/* 448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.


Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]


Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space.*/


// The easy solution with extra space is to convert this into a hash set & then iterate through the set to remove values

var findDisappearedNumbers = function(nums) {
  let hashset = new Set(nums);
  let result = [];

  for (let i = 1; i <= nums.length; i++){
    if (!hashset.has(i)){
      result.push(i)
    }
  }

  return result
};

/* Two little tricks here.
First is that we are told to initialize at 1; so for the loop we need i <= nums.length.
Second is what we are comparing against the hashset is the index counter that's why line 31-32 has only "i".*/
