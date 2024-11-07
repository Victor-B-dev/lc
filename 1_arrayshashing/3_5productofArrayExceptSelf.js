// Leetcode problem # 238 - PRoduct of Array Except Itself
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// 1. Brute Force

const productExceptSelfBF = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++){
    let product = 1;
    for (let j = 0; j< nums.length; j++){
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
}

// Full double loop means O(n^2). Can easily do better.

// 2.a Division
const productExceptSelfDivSimple = (nums) => {
  const result = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++){
    product *= nums[i]; // find the product of all the numbers
  }

  for (let i = 0; i < nums.length; i++){
    result.push(product / nums[i]); // divide the product by the nums and store each result in the result array
  }

  return result
}

/* This is probably the intuitive answer one would think to do were it not for the constraint to not use division.
We know each total product is multiplying all numbers so dividing by each number afterwards doesnt have us figuring out the total product every time.
Redundant work.

I want to note that there is an obvious mathematical edge case here that should be accounted for but I want to show that as a separate solution.

This case is obviously being if a number in the array is a 0 which would make the product 0 and then later dividing 0 by 0 is going to throw you an error.
*/

// 2.b Division - Zero Count Edge Case

const productExceptSelfDivZeroCount = (nums) => {
  const result = [];
  let product = 1;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== 0){
      product *= nums[i];
    } else {
      zeroCount++;
    }
  }

  if (zeroCount > 1) {
    return Array(nums.length).fill(0); // if there is more than one zero, all the numbers will be 0
  }

  for (let i = 0; i < nums.length; i++){
    if (zeroCount === 1) { // if there is exactly one zero,
      result[i] = (nums[i] === 0) ? product: 0; // at that index, it will not be included in the product, so we still need that result, every other position of the result array will otherwise be 0
    } else {
      result.push(product / nums[i]); // if there are no zeros, we simply divide the product by 0
    }
  }

  return result
}

/* Remember the original product is the product of the array except a given index in an array.

If there is more than one zero, everything will be zero.
If there is one zero, it won't be included so you still need the product of everything else.
Because those edge cases break the function completely, the logic flow is as shown above so we don't do any work we don't need to.
*/

// 3. Prefix Suffix (Optimized)

const productExceptSelfPrefixSuffix = (nums) => {
  const result = new Array(nums.length).fill(1);
  // if we looked at what is being asked of us, we can see each side of the current number being excluded as a prefix and suffix. therefore we can run two loops to find the prefixes and suffixes then multiply them together

  // "out of bounds" or ignoring a position can be represented as a 1 since that does not change the product

  for (let i = 1; i < nums.length; i++) { // we start at 1 instead of 0 because the first result value will exclude the 0 index position in the product
      result[i] = res[i - 1] * nums[i - 1]; // to find each prefix (the numbers before the current position) it is every position as we iterate to the right is the previous position multipled by the next number in the nums.
  }
  
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= suffix; // the post fix is done is basically prefix but done in reverse
      suffix *= nums[i];
  }
  return result;
}

/* Note the constraint says the result array is not considered additional space.
So storing any value needs to be in the result array.
Therefore we calculate all the prefixes first and store them in the result array.

Then we iterate through the suffixes and multiply them into the array.

The tricky part with this implementation is making sure the start/end values of each loop is correct.
*/