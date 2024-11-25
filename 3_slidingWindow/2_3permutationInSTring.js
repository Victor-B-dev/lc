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

// Hashmap variant- Too Slow BTW

var checkInclusion = function (s1, s2){
  let count1 = {};
  for (let char of s1) {
    count1[char] = ((count1[char] || 0) + 1) // create a map for the characters of s1; not using Map() just for ease of typing this
  }

  let need = Object.keys(count1).length; // grab the number of the letters from s1 map

  for (let i = 0; i < s2.length; i++){ // for each character of the second string
    let count2 = {}; // create a map for the character count
    let current = 0; // current is short for the count of current matching characters

    for (let j = i; j < s2.length; j++){ // beginning at the start of the substring
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

This is actually still too slow (TLE) for leetcode. There's unnecessary substring checks and it runs the current === need match repeatedly.
*/

// Sliding Window - Matches 

var checkInclusionSW = function (s1, s2) {
  if (s1.length > s2.length){
    return false;
  }

  let s1Count = new Array(26).fill(0); // initialize an array for both word counts, 26 spots for 26 lower case letters
  let s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++){ // fill up each word count with string one's length since that's the minimum length substring
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++){ // we check the initialized word counts for the current number of matches at initialization
    if (s1Count[i] === s2Count[i]){
      matches++;
    }
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++){ // starting position is at minimum substring length (s1)
    if (matches === 26){ // if there are 26 matches, that means there's a valid substring
      return true;
    }

    let index = s2.charCodeAt(right)  - 97; // we start at the right pointer translating the character into an index on the array
    s2Count[index]++; // move the right pointer over 1 and process the new character
    if (s1Count[index] === s2Count[index]){  // if the word count at the index matches
      matches++; // increment the matches
    } else if (s1Count[index] + 1 === s2Count[index]){  // if the word count at the index is one more than the correct word count; note it is written comparing s1 to s2
      matches--; // decrement the matches
    }

    index = s2.charCodeAt(left) - 97;  // now select the left pointer
    s2Count[index]--; // remove a count at this index since the left pointer is going to move over one
    if (s1Count[index] === s2Count[index]){ // check if this removal causes a match ++
      matches++; 
    } else if (s1Count[index] - 1 === s2Count[index]){ // only decerement if it causes a match to unmatch (change of 1 at an index)
      matches--;
    }
    left++; // move the left pointer over one
  }

  return matches === 26;
}

/* See group Anagrams question in arrayshashing (lc # 49) for array trick.

Instead of comparing each index in each hashmap, as in the hashmap variant, we can instead evaluate a true false boolean on matches.
Matches are updated as character counts are updated so we are dynamically keeping track as we iterate on first pass.
This is slightly more optimal than the hashmap variant since we don't need to do the final comparisons at the end of indexing all the values.

Line 107 accounts for the fact when we add a character not in the s1 string to s2's word count, we need to decrement the matches (adding a character that isn't a match)

Line 111-118 may seem a bit confusing with removing a count before moving the pointer but it's due to the way the left pointer is set up.

You can also write the left pointer as a value in respect to the right pointer (being s1.length behind it)
*/

