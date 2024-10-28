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

// Reversing the string

/* We can make a new string that iterates through the string and reverses it.
We still need to check for the alphanumeric.

However this takes up additional space to store the string, so enter the two pointer strat for a solution that takes less space complexity.

*/

// Two Pointers - ASCII conversion
/* This hint is provided by the constraint & also related back to the groupAnagrams problem in arrayshashing.
We can check the value of a character to see if it is in the continguous ranges of alphanumeric characters (i.e. we know the ascii values of alphanumeric characters fall in 3 ranges, if it's not in any of those ranges, it's not alphanumeric)

*/

// Two Pointers - Regex
/* We can also use regex to check for alphanumeric characters, not provided by the constraint, just some food for thought.

*/