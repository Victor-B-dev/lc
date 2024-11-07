// Leetcode problem # 238 - PRoduct of Array Except Itself
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// 1. Brute Force

const productExceptSelfBF = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++){
    let product = 1;
    for (let j = 0; j< nums.length; j++){
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
}

// Full double loop means O(n^2). Can easily do better.

// 2. Division
const productExceptSelfDivSimple = (nums) => {
  const result = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++){
    product *= nums[i];
  }

  for (let i = 0; i < nums.length; i++){
    result.push(product / nums[i]);
  }

  return result
}

/* This is probably the intuitive answer one would think to do were it not for the constraint to not use division.
We know each total product is multiplying all numbers so dividing by each number afterwards doesnt have us figuring out the total product every time.
Redundant work.

I want to note that there is an obvious mathematical edge case here that should be accounted for but I want to show that as a separate solution.
*/

// 3. Prefix Suffix (Optimized)