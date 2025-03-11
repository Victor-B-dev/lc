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
var findDifferentBinaryStringBT = function (nums){
  const stringSet = new Set(nums);
  
  const backtrack = (i , current) => {
    if (i === nums.length){ // this is for the base case
      const result = current.join("");
      return stringSet.has(result) ? null : result; // if the result string is in the string set, return null, otherwise it's the missing string
    }

    let result = backtrack (i + 1, current); // try current position at 0
    if (result) return result;

    current[i] = "1";
    return backtrack(i + 1 , current); // try current position with 1 at position i
  };

  return backtrack(0, Array(nums.length).fill("0")); // base call to start ("nums.length of 000000~") this is part of the problem set up
}

/* If difficulty with understanding solution, throw into chatgpt or other AI engine to illustrate recursive calls being generated.
The way the call works is similar to a tree with 000 being generated and if it not working, then previous calls for e.g 001 is then tried.*/


// Optimal Solution is Cantor's Diagonal Algorithm. Which is an O(n) time complexity.

var findDifferentBinaryString = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      res.push(nums[i][i] === '0' ? '1' : '0');
  }
  return res.join("");
};

/* Hot it works - clever.
It flips the input from the nums array on the diagonal such that any 0 becomes 1 and any 1 becomes 0 (see line 56).
This guarantees that any string generated is different from an existing string instead of brute forcing every possibility.
(Explaining the O(n), ah.)

Wait why specifically the diagonal? That's the algorithm/the math truth.
The diagonal is a unique pattern that is inherently different from the string we are constructing

It's a tested theorem, super cool.
*/