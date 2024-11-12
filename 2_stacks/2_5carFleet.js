// Leetcode Problem # 853 - Car Fleet
/*

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.
You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation:
There is only one car, hence there is only one fleet.

Example 3:
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The car starting at 4 (speed 1) travels to 5.
Then, the fleet at 4 (speed 2) and the car at position 5 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

 

Constraints:
n == position.length == speed.length
1 <= n <= 105
0 < target <= 106
0 <= position[i] < target
All the values of position are unique.
0 < speed[i] <= 106
*/

// Solution 

var carFleet = function(target, position, speed) {
  let pair = position.map((p, i) => [p, speed[i]]);
  pair.sort((a, b) => b[0] - a[0]);

  let stack = [];
  for (let [p, s] of pair) {
      stack.push((target - p) / s); // time to reach target is pushed onto the stack
      if (stack.length >= 2 && // condition to check if its a fleet i.e. 2 cars or more
          stack[stack.length - 1] <= stack[stack.length - 2]) // check if current car time is the same or earlier than previous car time
      {
          stack.pop(); // if it is, it becomes a fleet with the previous cars, otherwise its its own fleet on the stack
      }
  }
  return stack.length; // return the number of fleets
};

/* This problem is easier to solve with a solid understanding of the problem so I think it's best to re-iterate the constraints in another way.

It is largely a basic physics problem, the trouble with it being converting the information we know into code.

Think of it as an XY graph.

We have a series of cars moving at different starting positions and speeds to a target.

The furthest along car is the first constraint of a fleet. If it's the fastest, subsequent cars will be its own fleet, if its the slowest, anything that catches up to it will become part of its fleet.

Thus we need to compare time it takes for each car to reach the target. We need to do it via sorted positions since we don't know when "collisions" will occur but we know over time that's where it can occur. (Actual time of collision doesn't matter, only that it occurs)

Thus we implement a stack to easily track and compare for each fleet.
*/