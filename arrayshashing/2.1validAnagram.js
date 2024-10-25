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

// 2- hash table/map - regular object

var isAnagramHashTable = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (const key in countS) {
        if (countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
}

/*
So here we have a hashtable/hashmap (in JS you don't need to use the Map object & it's a bit easier to read/remember the syntax for) not unlike twoSum's. Either way the important part is we are caching our answers into a better data structure for faster lookup for comparisons.

The natural inclination of course is to make a hashmap for each string. 
We iterate through the length of the strings (which are the same so line 85 which begins the loop should can be either s or t) and count every letter (s[i] or t[i] respectively) by either first setting it (hence the || 0) and adding 1 OR calling the value then adding 1 to it. So the key value pairs in the objects are the letter being the key and the index being the count number.

This ++ iterating should be familar even if the syntax is not.

In the next loop, we make a comparison of the values of the letters. 
E.g. How many A's are there? How many B's are there? All the value returns should be the same.

Note this is faster than the previous because again hashmap lookup and insertions are O(1), the entire constraint is on how long the original strings are. 

Sorting time complexity is quite variable and in actual practice may be faster if there's not much to sort.
*/


// hashmap variant - also optimized for space
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

/* Note the syntax has changed to be that of the Map object BUT let's talk about the trick with the space complexity.

We are only making one hashmap that we fill with the character counts of one string using the same logic of either adding the character at 1 value or getting the count and iterating on it.

Then we subtract the character count of the other string from the values. We do this because if the character counts are meant to be identical then +X then subtracting X later we should expect 0 for every single character count at the end.

Of course there's an early escape of if the character doesn't exist in the map already since they are supposed to be anagrams.

Extra note: this strategy is very similar to using a stack for matching pairs (see valid parentheses questions under stacks), but also wildly applicable any time you need to do a comparison between two things that resolve into one thing as an answer.
*/