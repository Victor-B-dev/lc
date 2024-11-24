/*Leetcode # 567 - Permutation in String

Given two strings s1 and s2, return true if s2 contains a
permutation
of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2. 

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false


Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

/* Brute force is obviously out of the question -- it's very easy to get bogged down in the implementation detail of "permutation"
We are also given a hint (on actual leet code website), to think about anagrams (e.g. array hashing check anagram problem).
We're also given a limit of 26 letters.

Therefore we're looking for an anagram of s1 inside a substring of s2.
We can do a sliding window of the letter count of substrings until there's an exact match of letter counts.
*/

// Hashmap variant

var checkInclusion = function (s1, s2){
  let count1 = {};
  for (let char of s1) {
    count1[char] = ((count1[char] || 0) + 1) // create a map for the characters of s1; not using Map() just for ease of typing this
  }

  let need = Object.keys(count1).length; // grab the number of the letters from s1 map

  for (let i = 0; i < s2.length; i++){ // for each character of the second string
    let count2 = {}; // create a map for the character count
    let current = 0; // current is short for the count of current matching characters

    for (let j = i; j <s2.length; j++){ // beginning at the start of the substring
      let char = s2[j];
      count2[char] = ((count2[char] || 0) + 1) // add the current character to the character count

      if ((count1[char] || 0) < count2[char]){ // conversely conveyed, if the count for a characer in substring 2 is greater than in 1, or a character is added that is not part of string 1, it cannot be a valid substring
        break; // break the current loop i.e. start the next letter
      }

      if ((count1[char] || 0) === count2[char]){ // if the count for characters match 
        current++; // update the count for matching characters
      }

      if (current === need){ // if the current substring char count matches the required match, then early return
        return true
      }
    }
  }
  return false; // if the loops run without any successful matches, then substring 1 isn't in substring 2
}

/* Line 50-51 is where a lot of the logic happens to progress the algorithm smoothly.
A non valid substring can occur in a few ways.
Adding a character that isn't part of substring 1 breaks it. 
Adding too many to a character count also correctly breaks it. 
(It being the current substring starting at a given letter)
*/



