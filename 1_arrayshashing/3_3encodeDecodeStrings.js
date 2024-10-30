// Believe this is leet code # 271
/* String Encode and Decode

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement "encode" and decode"

Example 1:

Input: ["learning","is","very","hard"]["learning","is","very","hard"]

Output: ["learning","is","very","hard"]

Example 2:

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

// Solution - Encoding is the easy part, Decoding is the hard part

const encode = (strs) => {
  let result = '';
  for (let s of strs) {
      result += `${s.length}#${s}`; // encode in the oorder of number, # , string
  }
  return result;
}

const decode = (str) => {
  let result = [];
  let i = 0;

  while (i < str.length) {
      let j = i; // initialize pointers
      while (str[j] !== '#') { // find the delimiter with second pointer, the substring before the # is the length of the string after the # from the way we encoded
          j++;
      }
      let length = parseInt(str.substring(i, j), 10); // take the encoded length value that is a substring and turn it into a number
      i = j + 1; // move one pointer to after the delimiter #
      j = i + length; // move the second ponter for the length of the string that was decodedi n line 45
      result.push(str.substring(i, j)); // push that substring into the result array
      i = j; // move the first pointer to the end of the string & repeat
  }
  return result;
}

/* Encoding is decepctively simple in that we need to add character values between the strings to separate them.
The problem however is if that special char is if that is actually included in one of the given strings.

How we get around this is by adding another value. In this case, we are adding length to help us count the number of characters after the # sign (also known as a delimiter in this case).

We make use of two pointers to find the limiter (#) and a substring goes from # to #.
In the first while loop of (41-45) we use the substring i,j to grab the encoded length of the string (this is the value before the #).
Then from 46-48, we are moving the pointers to the actual string (i being 1 position after the #, and J being the length of the string after the #).


If the encoded was "5#Hello5#World"

DECODING "5#Hello5#World":
1. First iteration:
Find '#' after '5'
Extract length = 5
Extract string from next 5 chars: "Hello"
 Push "Hello" to result

2. Second iteration:
Find '#' after '5'
Extract length = 5
Extract string from next 5 chars: "World"
Push "World" to result

*/
    