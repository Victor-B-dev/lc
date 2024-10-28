// Leetcode problem # 125 - Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.


Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.


Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

*/

// Reversing the string - ASCII conversion

var validPalindrome = function (s) {
  let sanitizedStr = "";
  
  // return a true or false based on alphanumeric
  const isAlphanumeric = (char) => {
    return ((char >= 'a' && char <= 'z') || 
    (char >= 'A' && char <= 'Z') || 
    (char >= '0' && char <= '9'))
  }

  // sanitize the original string by checking every string if its alphanumeric, if it is, add it to the revers
  for (let char of s){
    if (this.isAlphanumeric(char)){
      sanitizedStr =+ char.toLowerCase();
    }
  }

  // compare the sanitized string with its reversed version
  return sanitizedStr === sanitizedStr.split("").reverse().join("");
}

/* The hint to sanitize is provided by the constraint & also related back to the groupAnagrams problem in arrayshashing.

We can check the value of a character to see if it is in the contiguous ranges of alphanumeric characters (i.e. we know the ascii values of alphanumeric characters fall in 3 ranges (lowercase, uppercase, numeric), if it's not in any of those ranges, it's not alphanumeric)

We rewite it as a helper function to be called per letter.

As usual with JS, it's a bit limited with string methods so we need to convert it into a array, reverse it, join it back together into a string to do the reverse procedure.

However this solution takes up additional space to store the new string, so enter the two pointer strat for a solution that takes less space complexity.
*/

// Two Pointers 
/* 

*/

// Two Pointers - Regex

const stringOnly = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

/* We can also use regex to check for alphanumeric characters, not provided by the constraint, just some food for thought due to the power of regex commands.

*/