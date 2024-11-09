/* Leetcode Problem # Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
  The valid operators are '+', '-', '*', and '/'.
  Each operand may be an integer or another expression.
  The division between two integers always truncates toward zero.
  There will not be any division by zero.
  The input represents a valid arithmetic expression in a reverse polish notation.
  The answer and all the intermediate calculations can be represented in a 32-bit integer.

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
*/

// Solution - stack

var evalRPN = function(tokens) {
  const stack = [];

      for (const token of tokens) {
          if (token === '+') {
              stack.push(stack.pop() + stack.pop());
          } else if (token === '-') {
              const a = stack.pop();
              const b = stack.pop();
              stack.push(b - a);
          } else if (token === '*') {
              stack.push(stack.pop() * stack.pop());
          } else if (token === '/') {
              const a = stack.pop();
              const b = stack.pop();
              stack.push(Math.trunc(b / a));
          } else {
              stack.push(parseInt(token));
          }
      }
  return stack.pop();
};

/* Biggest problem is just understanding the question. Read the examples, plan out steps of how to parse the solution.

The most likely problem people would find I believe is realizing to push a mathematic expression back onto the stack for use.
But otherwise once you know about that trick of storing the solution on top of the stack, it becomes easier to see how the code works.

The if/elses are a bit ugly and a good exercise here would be to use switch case for clarity.
*/