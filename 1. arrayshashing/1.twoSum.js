// original Problem # 1 from Leetcode

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/


/* The brute force answer when reading the problem is the O(n^2) answer as suggested by the follow up on line 30 here.
Our basic logic intuition would naturally lead us to simply add each number together repeatedly.
First number + second number. First number + third number, so on and so forth for every permutation.

If we coded it out, it would look something like this where i is the first number and j is the second number.
As you can see there are two loops that need to iterate through all the numbers and having an operation performed leading to the O(n^2) complexity. If you put this in leetcode, it will actually time out.

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 1; i < nums.length - 1; j++){
            if (nums[i]+nums[j] === target){
                return [i,j];
            }
        }
    }
};

So how do we do better than that?

This brute force method isn't taking complete advantage of the information we are given & how we are processing that information
*/

// hashmap answer - cannot do this with an array

var twoSum = function (nums, target) {
  const prevValues = {};

  for (let index = 0; i < nums.length; i++){
    const currentNum = nums[i]
    const neededValue = target - currentNum

    const index2 = prevValues[neededValue] // writing out this index2 to show that the J value from the earlier brute force is stored
    if (index2 !== null) {
      return [index2, index]
    } else {
      prevValues[currentNum] = i
    }
  }
}

// refactor

var twoSum2 = function (nums, target) {
  const prevValues = {};

  for (let index = 0; i < nums.length; i++){
    const currentNum = nums[i]
    const neededValue = target - currentNum

    if (prevValues[neededValue] !== null) {
      return [prevValues[neededValue], index]
    } else {
      prevValues[currentNum] = i
    }
  }
}

// optimized hashmap answer - JS has a built in specialized hashmap object 

var twoSumOpti = function(nums, target) {
  const prevValuesHashmap = new Map();

  for (let i = 0; i < nums.length; i++){
      const diff = target - nums[i];
      if (prevValuesHashmap.has(diff)){
          return [prevValuesHashmap.get(diff), i];
      }
      prevValuesHashmap.set(nums[i],i)
  }
};

/* In the brute force method, we are actually doing double the work that we need to because we are not taking advantage of caching/creating a dictionary.

A hashmap is the best use case because hashmap lookups and insertions are O(1).

I would recommend looking up properly what that is/means (namely that arrays are contiguous whereas hashmap is an ARRAY OF LINKED LISTS THAT HAVE KEY VALUE PAIRS, hence the discrepancy in search/look up time).

The key-value pair part is important because we need to return indices as the answer (hence the need for the I,J in the brute force approach).

In an overly brief explanation of why: when looking up an element in an array, the computer needs to actually traverse the entire array to scan to get to an element unless you have the index. It goes to the start of array's beginning memory block, then makes it way to the correct spot. Using the array methods: includes/IndexOf() in worst case scenarios actually has the computer fully traverse the array to return nothing (this is what those methods are doing behind the scenes, manual comparisons).

I brought up arrays because that is what beginners are most likely thinking about using to store numbers/values at first. I know that's what I did previously. This is also conveniently ignoring the fact that arrays are "secretly" objects behind the scenes.

In the case of the hashmap, we are checking if the index/key (which is a previous value from nums) exists in the map instead of the value itself, i.e. we are asking it hey, does this index exist (at all/ with something)? If the answer if yes, we have our match, this lookup is faster because it isn't doing a full traversal/calculation check if the value is in a spot. In the hashmap answer, if it doesn't exist, the K/V gets added to the map and it goes on.

This K/V is how we are saving the work/caching the operation we just did.

Again to re-iterate, we are changing the question from "does this value exist anywhere in this place", a question that requires a check at every index, to "does this index exist?" And we know index look ups are faster.

The key-value pair also allow us to return the answer since the original problem asks us for the indexes (we store originalNum:index), a hashmap allows us to create the relationship.

If we didn't need to return the indexes, a hash set (stores only UNIQUE values) would be better.

Often times if you need to store "simple" results and do comparisons, implementation of a hashmap will speed up the operations.

We are going from two pass (two loops) to (one pass).

*/