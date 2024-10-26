// LeetCode Question # 49

/* Given an array of strings strs, group the
anagrams
together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]


Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

// 1  - Sorting answer

var groupAnagramsSort = function (strs) {
  const map = {};
  for (let s of strs) {
      const sortedS = s.split('').sort().join('');
      if (!map[sortedS]) {
          map[sortedS] = [];
      }
      map[sortedS].push(s);
  }
  return Object.values(map);
}

/* Like the previous question "Valid Anagram" - there is a sorting variant 

When we look at the example given, we want to make "buckets" to catch each anagram.

We take the strings provided (line 36) & then sort each inividual string (line 37).
We check if the sorted string (sortedS is a key) is in the map.
If not, we create a new key-value pair with the key being the sorted string (e.g. ABT if we were going to use the example 1 BAT) and the value being an array (bucket).
Then we push the original string (S) into that key value pair bucket.

For clarity, we are making a new key value pair for each unique anagram. This is because we know anagrams will sort to the same thing, hence the key (sortedS) will be the same, that's how they go in the same bucket.

When the loop is done, we use Object.values(map) to return an array of the arrays (original strings are PUSHED, an array method, into each bucket) made for each anagram variant.
*/


// 2. Hashmap answer
var groupAnagramsHashmap = function(strs) {
  const map = {};

  for (const string of strs) {
      const count = Array(26).fill(0);
      for (const char of string) {
          count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join('#');
      if (!map[key]) {
          map[key] = [];
      }

      map[key].push(string);
  }

  return Object.values(map);
};

/* The clever trick here to figuring out how to not sort (to create the keys) is to normalize the value of the strings which is lines 65-67.

Instead to the create the keys, We know the alphabet is 26 letters so we create a new Array of 26 spots and fill it with 0's. So 0 would represent a, 1 would represent b, etc. 

Each string will have a character count at each of these indexes. If they're an anagram, they will have the same number at the same index.

We are doing this because we want all string reading to be converted into purely indexed insertions (which is O(1), super fast).

As we previously know (double check the DSA notes & previous question explanations), every character is actually a number behind the scenes. atCharCode(0) returns us that character's number and we subtract the value of 'a'.atCharCode(0) so we get a value between 0-25. This is how we find where to ++ at each needed index.

When the key is generated (line 70), we check if it's that key has been generated previously. If not we create a new key value pair (value being an empty array). 

Then we push the original string that was counted into that key value pair. (similar to containsDuplicate question)
Now all the strings are sorted into arrays that are anagrams of each other.

We return the values of the maps for all the anagram groups.
*/