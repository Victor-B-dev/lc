// Leet code # 20 - Valid Parentheses
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

// Solution

var isValid = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++){
      if (s[i] === "("|| s[i] === "{" || s[i] === "["){
          stack.push(s[i])
      } else {
          if (!stack.length ||
              (s[i] === ")" && stack.pop() !== "(") ||
              (s[i] === "}" && stack.pop() !== "{") ||
              (s[i] === "]" && stack.pop() !== "[")) {
              return false;
          }
      }
  }
  return stack.length === 0 
}

/* Implementing a stack to keep track of past additions & being able to retrieve to match valid pairs is the key.
the stack logic from 41-43 is just to check when adding a closing parentheses if its matching a corresponding one. 
If it can't, we early return.

If we can cleanly go through all the variations and the end stack.length is 0 that means we properly resolved everything in the input array.
*/