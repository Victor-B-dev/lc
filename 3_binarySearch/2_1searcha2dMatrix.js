/* Leetcode # 74 - Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.


Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
https://assets.leetcode.com/uploads/2020/10/05/mat.jpg

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg
 

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

*/

// 1. Brute Force - searching through every row, column by column

var searchMatrixBF = function (matrix, target) {
  for (let row = 0; row < matrix.length; row++){
    for (let column = 0; column < matrix[row].length; column++){
      if (matrix[row][column] === target) {
        return true;
      }
    }
  }
  return false
}

// 2. Staircase Search - Problem dependent solution

var searchMatrixStaircase = function (matrix, target) {
  let row = 0;
  let column = matrix[0].length - 1;

  // staircase searches always start at either the top right or the bottom left, in this example its top right
  while (row < matrix.length && column >= 0){ // matrix.length is the total number of rows
    if (matrix[row][column] > target) { // if the top right is greater than the target, we know we are in the right row
      column--;
    } else if (matrix[row][column] < target){ // if not, we can go to the next row and try the search again
      row++;
    } else { //we perform both steps until its true or we break the loop
      return true;
    }
  }
  return false
}

/* This is reliant on the problem being set up for us. 

Rows need to be sorted in increasing order from left to right.
Columns need to be sorted in increasing order from top to bottom.

We are using the information given to check if a number could possibly be in a row by looking at the the endpoints of a given row.

Time complexity: O(m+n) where m is the number of rows and n is the number of columns.
We can do better because in worse case we would need to iterate through all the rows and all the columns.
*/


// Binary Search

var searchMatrixBS = function (matrix, target) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  
  let top = 0
  let bottom = ROWS - 1;
  while (top <= bottom){ // each loop narrows down the rows
    const row = Math.floor((top + bottom) / 2); // calculate the middle row
    if (target > matrix[row][COLS - 1]){ // we still do the same top right or bottom left check, in this case top right
      top = row + 1; // remove a top row
    } else if (target < matrix[row][0]){ // also need to check bottom
      bottom = row - 1; // remove a botttom row
    } else { // we do this until we're left in a remaining row or we can't do any more operations
        break; // we break out of the loop 
    }
  }

  if (!(top <= bottom)){ // if none of the rows contain the target, its false
    return false;
  }

  const row = Math.floor((top+bottom) / 2); // start checking columns with binary search
  let left = 0
  let right = COLS - 1;
  while (left <= right){
    const middle = Math.floor((left + right) / 2);
    if (target > matrix[row][middle]){
      left = middle + 1;
    } else if (target < matrix[row][middle]) {
      right = middle - 1;
    } else {
        return true;
    }
  }
  return false
}


/* Binary search still relies on previous assumption wrt sorting.

We are basically running two binary searches, one to narrow down the rows. The next to narrow down the columns.
Binary search works better than the staircase since we are discarding half the values in each loop.

Hence time complexity O (log m + log n) where m is the row and n is the column.
*/

// Binary Search - One Pass

var searchMatrixBSOnepass = function (matrix, target) {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;

  let left = 0;
  let right = ROWS * COLS - 1;
  while (left <= right){
    let middle = left + Math.floor((right - left) / 2);
    let row = Math.floor(middle / COLS);
    let column = middle % COLS;
    
    if (target > matrix[row][column]){
      left = middle + 1;
    } else if (target < matrix[row][column]){
      right = middle - 1;
    } else {
      return true;
    }
  }
  return false;
}

/* Here because of the problem set up, the entire series of numbers is in non descending order.
As such we could technically treat is as one giant array and as such do binary search on the whole thing in one pass.

This is just an extra extra optimization.
*/