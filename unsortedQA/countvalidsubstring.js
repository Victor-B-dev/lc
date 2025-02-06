/*
the problem was count the number of valid substrings 
input is only binary string 10 
the problem was i was undercounting the # of valid substrings severely

no adjacent characters can be teh same
for a valid substring to count it must be between minlength and maxlength (inclusive)

*/

function countValidSubstrings(S, minLength, maxLength){
  let count = 0;
  let left = 0;

  for (let right = 1; i < S.length; right++){
    if (S[right] === S[right - 1]){
      left++;
    }

    if (right - left >= minLength && right - left <= maxLength){
      count++;
    }
  }

  return count;
}