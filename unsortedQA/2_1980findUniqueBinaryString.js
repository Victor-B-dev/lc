/* 1980. Find Unique Binary String
Given an array of strings nums containing n unique binary strings each of length n, 
return a binary string of length n that does not appear in nums.
If there are multiple answers, you may return any of them.

Example 1:
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.

Example 2:
Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.

Example 3:
Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.*/

// One nice simple thing about this question is that any valid answer passes.

/* Brute force solution would be to convert the nums array into a hashset, then check individually if it exists in the set.
O(n)^2 solution as worst case.
*/

// Backtracking - when a solution is generated it will end.





// Optimal Solution is Cantor's Diagonal Algorithm. Which is an O(n) time complexity.

var findDifferentBinaryString = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      res.push(nums[i][i] === '0' ? '1' : '0');
  }
  return res.join("");

};