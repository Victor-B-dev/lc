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

// Sliding Window (Optimal)

var characterReplacementSW = function (s, k){
  let count = new Map();
  let result = 0;

  let left = 0; // we initialize the left outside a loop because we know we only need to move the left pointer across the condition in line 84
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++){ // start with moving the right pointer
    count.set(s[right], (count.get(s[right]) || 0) + 1); // add the character or +1 the count
    maxFreq = Math.max(maxFreq, count.get(s[right])); // update max frequency if necessary
    
    while ((right - left + 1) - maxFreq > k){ // if the substring length minus the most frequent character is greater than k, i.e. it's a valid string
      count.set(s[left], count.get(s[left]) - 1); // decrement the left character count
      left++; // move the left pointer
    }
    result = Math.max(result, right - left + 1); // compare the result and the current substring; this result will only change when
  }
  return result;
}

/* The trick with the line 84 condition is looking at the problem and understanding logically when we would care about doing the comparison. As mentioned it's only when the most frequent character in a substring updates && the length being long enough, is when it's possible for our result to be influenced. When this occurs, we move the left pointer because we want to see if a different character's maximum count is possibly greater when accounting for the sliding window.

In the earlier example of ABABBA, this condition allows us to arrive at these two valid solutions of [ABABB-] & [-BABBA].

This may be a bit hard to understand at first since we are skipping over the solution variant of using the character counting directly.
*/

// Sliding Window - Direct Character Counting - Explanation

var characterReplacementSW2 = function (s, k) {
  let result = 0;
  let charSet = new Set(s); // could do this with a map, it's just nicer to not need to type the map syntax since this is a direct count

  for (let char of charSet){ // for each character in the set
    let count = 0;
    let left = 0; // initialize left

    for (let right = 0; right < s.length; right++){ // intialize right
      if (s[right] === char){ // check if the right pointer is the character
        count++; // update the count
      }

      while ((right - left - 1) - count > k){ // check if the substring minus the currently counted character is greater than k, i.e. does the current substring exceed the number of replacement possible
        if (s[left] === char){ // check if the left is the same character
          count--; // if it is, decrement the count
        }
        left++; // move the left pointer over regardless to start checking the next substring since further right pointer movement will not result in a valid substring
      }

      result = Math.max(result, right - left + 1); // check the substring length against the current max
    }
  }

  return result;
}

/* This approach is based on using the character counts.
We only need to check for the valid characters in the string, hence a set.

Everytime a given character count is updated, we check if it's a valid substring with regards to this specific letter. 

The condition is the right pointer will keep going until it reaches a point where when it's updated and the number of replacements possible is exceeded (no longer valid window), we move the left pointer along since further right pointer iterations will not result in a valid substring count increase.
*/