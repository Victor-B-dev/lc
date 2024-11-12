/* Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]


Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

/* Brute force solution is doing a basic comparison of each position until a less number is found.
Obviously inefficient.
*/

// Solution

var dailyTemperatures = function(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // pair: [temp, index]

  for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) { // we loop through each day and check if the temperature is warmer than any previous day in teh stack
          const [stackTempature, prevIndex] = stack.pop();  // if it's great, we pop the top of the stack, repeatedly doing so since it's a whiel loop; note that this line is a destructuring of the stack values. we do this to easily access prevIndex for the next line.
          result[prevIndex] = i - prevIndex; // update the result array with the difference in indices
      }
      stack.push([t, i]); // add the current temp then onto the stack and resume
  }
  return result;
};

/* Looking back at previous array/hashing solution, we can utilize a similar approach as productOfArrayexceptSelf with a prefilled array to track the solution. The trick here is we are utilizing previous values.

Similar to minStack we are going to track the value of differences as part of the stack.

In reference to line 36 we could do something like const [, prevIndex] = stack.pop() but that's a little hard to read and realize it's a destructuring. It's also why it lints if you're in vscode.

similar without destructuring you could do
const poppedElement = stack.pop()
const prevIndex = popped[1]

then the rest of the code is the same
*/