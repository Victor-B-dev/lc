/* 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.


Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

Constraints:
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
*/

/* Pre Solution thoughts
There are two interesting constraints here. 

First is the 1-indexed array, meaning that the 1st position in the array is not array[0] but array[1]. My initial thought is to basically ignore this and just add it at the end but there may be a deliberate edge case that I should account for.

The big constraint with the answer however is 'Your solution must use only constant extra space.'

This automatically precludes using the previous solution with a similar leetcode problem #1 - twoSum where we used a hashmap.
*/

// 1. Brute Force Solution

/* Two For loops, obviously poor choice. On^2. But at minimum brute forcing means at least you understand the base problem, and now you need to manpiulate the information further.
*/

// 2. Hashmap 

/* You can look at twoSum again for how a hashmap works perfectly for this (previous inputs can be checked at O(1)), however the constraint with memory is still there.
So we are going to learn about another approach (obvious by the folder this is in).
*/

// 3. Two Pointer - Optimal

/*
*/