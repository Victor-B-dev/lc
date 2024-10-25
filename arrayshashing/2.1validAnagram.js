/* Original Problem # 242 from Leetcode
Given two strings s and t, return true if t is an
anagram
of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/* Solution basis
Reading the question, there are extra constraints we will want to impose into our solution for best results.

If the lengths are not the same, then we will want to "return early/ early return/ escape out of the function or loop." 

Any time we cant think of a way of a condition that when false, will logically break the point of the rest of the code, we want it to be a condition we check early so we don't waste time/resources.
Therefore because anagrams always have the same number of letters (& subsequently number of specific letters), we want to check the string lengths.

While this is not technically hard requirement to actually a valid answer, we want to do this to speed up our function/algorithm.

There are two ways to answer the question and one of them is heavily suggested by the follow-up constraint (which is also the faster one).

*/

// 1- sort answer

var isAnagramSort = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sSort = s.split("").sort().join("");
    let tSort = t.split("").sort().join("");
    return sSort === tSort
}

/* If you are coming from other another language, the JS variant of the answer may seem wildly different so I will explain.
Other languages have built into their libraries - sorting functions for strings that make this easier, javascript's sort() is only an array method.

So what needs to be done is split("") turns it into an array, then it's sort(), then join("").
If you don't pass "" into split it will just return the string.
If you don't pass "" into join it will separate everything by commas.

Okay that's JS but how do you sort strings? how is A < B ?

if we go back to the basics of computing, we know (& is suggested by the follow up constraint) that letter representation in their actual form of bits & bytes are following a character code. These character codes logically follow each other closely in usual character code formats.

E.g. ABA would be [65,66,65] (uppercase and lowercase are unique btw.).

So what sort is doing behind the scenes? It's kind of obvious now right?

It is taking the character code value of every letter in the string, using that number, then comparing it against each other and ordering them.

E.g. the sort on ABA would go from [65,66,65] to AAB [65,65,66].

Therefore if we sort both strings, if they return identical values, then we have the truth if they are anagrams.

Complexity depends largely on the sort but Time is usually considered O(n log n). Space is O(1) or O(n).

Bonus: If you're wondering why you need the .join() in the JS variant of this question, it's because leaving them as arrays would return false because you'd be comparing the memory address of the arrays (are these two variables pointing to the same place? answer is no.)
Look up reference equality versus value equality.

*/

var isAnagramHashMap = function(s, t) {
    if (s.length !== t.length) return false;

   const hashmap = new Map();

   for (const char of s) {
       hashmap.set(char, (hashmap.get(char) || 0) + 1);
   }

   for (const char of t) {
       if (!hashmap.has(char)) return false;

       hashmap.set(char, hashmap.get(char) - 1);
       
       if (hashmap.get(char) < 0) return false;
   }

   return true;
}