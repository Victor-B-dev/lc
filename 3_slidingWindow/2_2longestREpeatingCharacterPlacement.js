/* Leetcode Problem # 424 - Longest Repeating Character Replacement

You are given a string s and an integer k.
You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.


Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.


Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

/* Understanding the problem is essential so some additional information should be put into context.
Only uppercase characters means we know at worse there may be 26 characters to check in a map. Storing the values in a map therefore should be expected.

We know while checking a substring that a maximum length in a given substring will be from the left pointer at a character to the right pointer with the same character.
 
We then need to check if the length inbetween is less than or equal to the given integer k, i.e. the number of times we can do a replacement.

Substring length - count[letter] <= k

Every time we move pointers, we need to increment/decrement the count.
Importantly when we shift the left pointer, we need to decrement the character count which may be overlooked at first.

While still looking at the problem, we can also infer that the whole operation (ie comparing the result with the current count) only needs to be done when the current count exceeds a previous maximum count of a letter.

In other words, when calculating
substring length - maximum frequency of a character <= k.
If the current maximum frequency of character in the substring is less than a stored max, we should skip the rest of the loop and move to the next string because it will not influence the result.

*/

// Brute Force

var characterReplacementBF = function (s, k){
  let result = 0;

  for (let i = 0; i < s.length; i++){ // for each character, maintain a map to keep counts
    let count = new Map();
    let maxFreq = 0;

    for (let j = i; j < s.length; j++){
      count.set(s[j], (count.get(s[j]) || 0) + 1); // for each character, either add + 1 when it's encountered or add it to the map at value 1
      maxFreq = Math.max (maxFreq, count.get(s[j])) // check if the current character count exceeds the previous max frequency & replace if necessary
      if ((j - i + 1) - maxFreq <= k){ // if the substring length minus the max frequency is <= possible character replacements
        result = Math.max(result, j - i + 1); // compare the current with the previous longest substring
      }
    }
  }

  return result
}

// The brute force is O(n^2) because we're checking every single character for the parameters. Let's do sliding window


