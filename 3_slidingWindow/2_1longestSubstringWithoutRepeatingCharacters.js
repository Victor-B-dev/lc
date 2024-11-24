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
    let charSet = newSet(); // initialize a set;
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