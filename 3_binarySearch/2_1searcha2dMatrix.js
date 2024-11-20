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
  while (row < matrix.length && column >= 0){
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

Time complexity: O(m+n) where m is the number of rows and n is the number of columns
*/
