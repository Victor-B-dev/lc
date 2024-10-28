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

// 1. Reversing the string - ASCII conversion

var validPalindromeReverse = function (s) {
  let sanitizedStr = "";
  
  // return a true or false based on alphanumeric
  const isAlphanumeric = (char) => {
    return ((char >= 'a' && char <= 'z') || 
    (char >= 'A' && char <= 'Z') || 
    (char >= '0' && char <= '9'))
  }

  // sanitize the original string by checking every string if its alphanumeric, if it is, add it to the revers
  for (let char of s){
    if (isAlphanumeric(char)){
      sanitizedStr += char.toLowerCase();
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

// 2.1 Two Pointers
var validPalindromeTwoPointer = function (s) {

  const isAlphanumeric = (char) => {  // still need to implement Alphanumeric check
    return ((char >= 'a' && char <= 'z') || 
    (char >= 'A' && char <= 'Z') || 
    (char >= '0' && char <= '9'))
  }

  let left = 0; right = s.length - 1; // create pointers (variables) - one left, one right (array is length -1) 

  while (left < right ) { // using a while loop - we iterate until the pointers meet in the middle
    while (left < right && !isAlphanumeric(s[left])) { // using a while loop, we check if a character is an alphanumeric, if it isn't we go to the next letter. left pointer then sits there while the next loop runs
      left++;
    }
    while (right > left && !isAlphanumeric(s[right])) { // similar, we do the check from the right side, if it's not alphanumeric, skip it until it is, right pointer is now on an alphanum char
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()){ // we check if the lowercase version of the letters match at each pointer
      return false; // escape early if they aren't
    }
    left++; // increment to next letter
    right--; // decrement to next letter
  }

  return true // if the whole string is passed through with no problem, it means it's a valid palindrome
}


/* Two Pointer is an integral concept to learn to iterate through something in one pass without needing additional space.
Versatile usages will be in future problems.

*/

// 2.2 Two Pointers - Regex
var validPalindromeTwoPointerRegex = function (s) {

  const isAlphanumeric = (char) => {
    return /^[a-zA-Z0-9]$/.test(char);
  }

  let left = 0; right = s.length - 1;

  while (left < right ) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (right > left && !isAlphanumeric(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()){
      return false;
    }
    left++; right--;
  }

  return true
}

/* We can also use regex to check for alphanumeric characters, not provided by the constraint, just some food for thought due to the power of regex commands in manipulating/sanitizing strings. 
It's concise & in my opinion, easier to read once you learn.

Regex is contained in the //
What the command is saying = test if the character begins (^) with characters in any of these ranges [a-z] [A-Z] [0-9]
*/

// Bonus - reverse string with regex - Two Liner

var isPalindromeReverseRegex = function(s) {
  let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase(); // the i flag makes it case insensitive
  return newStr.split("").reverse().join("") === newStr ? true : false;
};