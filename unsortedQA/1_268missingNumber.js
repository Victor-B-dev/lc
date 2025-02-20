/* 268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n],
 return the only number in the range that is missing from the array.

 

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2] 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
 8 is the missing number in the range since it does not appear in nums.
*/



// optimal
var missingNumber = function(nums) {
  let result = nums.length;

  for (let i =0; i <nums.length; i++){
      res += i - nums[i];
  }

  return result
};

/* The trick with the solution is realizing what information we have & what we are looking for.
In the range given, because we are only looking for 1 number missing & what we are given is a "complete set", we know the difference between the total sum & the sum of the current set is the missing number.

The logic is similar to two sum.

Another way to look at it is that we are given two contiguous sets of numbers i & nums[i].
We don't care about the order that nums[i] comes in, they will always be exist in set i.

Hence we set result to nums.length because it is the missing value from the nums[i] set.
If you follow the logic from res+= i - nums[i], you'll be left with a remaining value.
*/