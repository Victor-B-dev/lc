/* Leetcode # 22 Generate Parentheses


Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
1 <= n <= 8

*/

// Solution - backtracking

var generateParenthesis = function(n) {
  const result = [];
  backtrack(n, 0, 0, '', result);
  return result;
}

let backtrack = (n, openN, closedN, current, result) => {
  if (openN === closedN && openN === n) {
      result.push(current);
      return;
  }

  if (openN < n) {
      backtrack(n, openN + 1, closedN, current + '(', result);
  }
  if (closedN < openN) {
      backtrack(n, openN, closedN + 1, current + ')', result);
  }
}

// need to move to backtracking when topic is eventually added. conceptualization as a stack solution still feels like a mess