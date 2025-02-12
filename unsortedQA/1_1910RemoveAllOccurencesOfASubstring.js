/* 1910. Remove All Occurrences of a Substring

Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.
A substring is a contiguous sequence of characters in a string.


Example 1:
Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".


Example 2:
Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".*/

/* Brute Force - examination
If we brute force it, my intuition would be to iterate through the string and everytime the first letter matches up, we'd try to match substring "part" to the ensuing string.

The problem is needing to restart from an earlier part of the string because a removal may lead to another valid instance of the substring.

We could implement logic that is only the substring length backwards but the solution isn't elegant since we are going over characters we arleady examined.

The stack solution addresses this but pointing out where the logic can be adjusted (examine using the final character of the target.)
*/

// stack solution

var removeOccurrences = function(s, part) {
  let stack = []; // stack is the result
  let targetLength = part.length
  let finalChar = part[part.length - 1]; 

  for (let currentChar of s){
    stack.push(currentChar);

    if (currentChar === finalChar && stack.length >= targetLength){
      if (stack.slice(-targetLength).join('') === part){
        stack.length -= targetLength;
      }
    }
  }

  return stack.join('');
};

/* the logic in 39 is real thing that needs to be explained.

Whenever the final letter of the substring "part" is encountered (finalChar), we check if the current stack is sufficiently long. Only then do we do the expensive comparison operation-- we check if the substring (shallow copy via slice/join) is equal to "part". If it is, we remove the characters from the stack.*/

// Super Optimized Solution - Knuth-Morris-Pratt (KMP) Algorithm