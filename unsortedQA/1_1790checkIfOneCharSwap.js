/* 1790. Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. 
A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.


Example 1:
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Example 2:
Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Example 3:
Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
*/

var areAlmostEqual = function(s1, s2) {
  let indexes = [];

  for (let i = 0; i < s1.length; i++){
      if (s1[i] !== s2[i]){
          indexes.push(i)
      } 

      if (indexes.length > 2){
          return false
      }
  }

  if (indexes.length === 2){
      let i = indexes[0];
      let j = indexes[1];

      return (s1[i] === s2[j] && s1[j] === s2[i]) 
  }

  return indexes.length === 0
};