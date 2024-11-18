/* 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

/* Understanding the question is a bit.

What you're trying to do is create the max area that can be obtained (imagine an XY graph) where the Y values are the integers given in the heights array.

A container has a left and right so naturally we will need a type of two pointers solution.
*/

// Brute Force

var maxAreaBF = function (heights) {
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
      for (let j = i + 1; j < heights.length; j++) {
          res = Math.max(res, Math.min(heights[i], heights[j]) * (j - i));
      }
  }
  return res;
}

/* Brute force -
The brute force is just two loops iterating through where the left (first pointer) is stationary and the right runs through the array to make the containers.

Checking every combination is inefficient so how do we write the logic to make it smarter?

Well we know a container is going to have a left and right, so the biggest container would need to start at X = 0 and y = heights - 1. If there is a bigger container, it'll be within those bounds.
*/

// Two Pointers

var maxAreaTP = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right){
    const area = Math.min(height[left], height[right]) * (right - left); // height vs width
    result = Math.max(result, area); // comparing previous result and potential new container with greater area
    if (height[left] <= height[right]){ // until the pointers meet
      left++; // increment the left to do the comparison
    } else{
      right--; // otherwise increment the right
    }
  }

  return result;
}

/* If we draw out the XY graph, we can observe the constraint in getting larger areas is the smaller points in the graph.

Therefore we want to skip the smaller heights and only do comparisons(calculating an area) when the next point is larger, otherwise we continue.

For example in the example given Input: height = [1,8,6,2,5,4,8,3,7], when iterating from 1 -> 8, we see 8 is greater than 1 so we do the recalulation of the area then, but 8 -> 6 is lower. 

So we stop the left pointer and start the right pointer decrementing. 7 -> 3 is lower, so we skip 3 and see 7->8. So we recalculate the max area and compare to the previous max area.

I'd also like to point out in line 61-64, one may be curious why there isn't a comparison for if height[left] > height[right] then r-- but if think about the line, it's actually the same as the else statement in line 64.
*/

