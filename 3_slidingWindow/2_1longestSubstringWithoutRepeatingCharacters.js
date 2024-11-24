/* Leetcode # 3 - Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Brute Force - Set used

var lengthOfLongestSubstringBF = function (s){
  let result = 0;

  for (let i = 0; i < s.length; i++){ // for each character in the string
    let charSet = new Set(); // initialize a set;
    for (let j = i; j <s.length; j++){ // initialize a second pointer to iterate through the string
      if (charSet.has(s[j])){  // check if the current character exists in the set
        break; // break the current loop
      }
      charSet.add(s[j]); // otherwise add the character to the set
    }
    result = Math.max(result, charSet.size); // compare the result and the current set's length/size, keep the larger one 
  }
  return result // return 
}

// Sliding Window 

var lengthOfLongestSubstring = function (s){
  const charSet = new Set();
  let left = 0;
  let result = 0;

  for (let right = 0; right< s.length; right++) { // for each character at the right pointer
    while (charSet.has(s[right])){ // check if the set has the current char
      charSet.delete(s[left]); // attempt to delete it with the left pointer position ie check if the left pointer is at the same letter
      left++; // move the left pointer up until it's not the same character as the right pointer
    }
    charSet.add(s[right]); // add the right pointer's character to the set
    result = Math.max(result, right - left + 1); // compare the current max and the distance of the pointers
  }
  return result;
}