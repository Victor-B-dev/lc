// Question # 217 - Contains Duplicate

/* Given an integer array nums,
 return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

*/

// Brute Force 
var hasDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true;
          }
      }
  }
  return false;
}

/* Not much to say but it's obvious this is an inefficient but "intuitive" solution

You are checking checking each number against every other number in the given array.

Any time you're running two loops you're getting O(n2),
there's probably a better way to do it.*/


// 2. Hashmap - object
function hasDuplicateObjectVer(nums) {
  const prevNums = {}; // empty object for map
  for (const num of nums) {
      if (prevNums[num]) { // Check if the number is already in the hashmap
          return true;
      }
      prevNums[num] = true; // if not, add it (marking it as true, could be truthy, because you need a key-value pair)
  }
  return false;
}

/* Building off the previous problems, we can place the values of the given array into a hashmap to speed up lookup
You can use a hashmap Object (Map) if you wish.

As long as you're caching your results, you're on the right track. */

// 3. - Hash Set
var containsDuplicateHashSet = function(nums) {
  const set = new Set(); // create Set

  for (let i = 0; i < nums.length; i++){
      if (!set.has(nums[i])){
          set.add(nums[i]) // if the Set doesn't have the number, add it
      } else {
          return true // if it does, return true
      }
  }
  return false
}

/* Similiar to a hashmap, a Set is a specially built Object with some additional properties. It purposefully only allows unique values (and it only needs values, not key-value pairs, which makes it a little cleaner), which happens to be a good optimization scenario for this leetcode problem. 

If this is the first time you're encountering a hashset, no problem.*/


// 4 - Hash Set Length - One liner
var hasDuplicateOneLiner = function (nums) {
  return new Set(nums).size < nums.length;
}

/* Note this is actually the same complexity as the hash set answer above just more clever.

We are still taking advantage of the hashset property that duplicates will not be added into the new set.

We compare the original array length with the Set's "length" (.size is the actual property name in the Set object to return number of unique elements, if you try calling length, it will return undefined)

If duplicates are removed automatically, then if the set size is smaller than the nums.length, we know there was a duplicate. */
