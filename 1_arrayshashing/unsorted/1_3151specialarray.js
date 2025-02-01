/*3151. Special Array I


An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers nums. 
Return true if nums is a special array, otherwise, return false.

Example 1:
Input: nums = [1]
Output: true
Explanation:
There is only one element. So the answer is true.

Example 2:
Input: nums = [2,1,4]
Output: true
Explanation:
There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

Example 3:
Input: nums = [4,3,1,6]
Output: false
Explanation:

nums[1] and nums[2] are both odd. So the answer is false.
*/

/* The only confusing part of this is figuring out what parity means.
In this case, it's asking if adjacent values are both odd or even.

Return true if they are never both odd/equal.
Return false (early exit) if they are.

With that knowledge, solution is simple, we just modulus the the values and check if they're equal.
*/

var isArraySpecial = function(nums) {
  for (let i = 1; i <= nums.length; i++){ // starting at first index
      let curr = nums[i] // current index
      let prev = nums[i - 1] // previous index


      if ((prev % 2 === 0) && (curr % 2 === 0) // if both even
          || (prev % 2 === 1) && (curr % 2 === 1)){ // or both odd
          return false // early exit
      }
  }

  return true; // if all pass, it's special
};