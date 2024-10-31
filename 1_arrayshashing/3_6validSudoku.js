// Leetcode # 36 - Valid Sudoku
/* 
You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.



Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false

*/

// Solution
var isValidSudoku = function(board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map(); // key = (r / 3) * 3 + c / 3

  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          const cell = board[r][c];
          if (cell === '.') {
              continue; // if empty continue
          }
          if (rows.get(r)?.has(cell) ||
              cols.get(c)?.has(cell) ||
              squares.get(
                  Math.floor(r / 3) * 3 + Math.floor(c / 3))
                  ?.has(cell)
          ) {
              return false;
          } // if hash set for the rows/columns/square already has this number, return false

          cols.set(c, new Set(cols.get(c)).add(cell));
          rows.set(r, new Set(rows.get(r)).add(cell));
          squares.set(
              Math.floor(r / 3) * 3 + Math.floor(c / 3),
              new Set(
                  squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3)),
              ).add(cell),
          ); // otherwise add it to each respective set based on the cell's coordinates
      }
  }
  return true; // if all tests pass, return true
};

/* This could be a hashset and you can write parts of this in a few ways but the major hitch with this problem is the visualization, particularly around the 3x3 boxes.

We want to store all values we come across in a variety of ways & we want to look up to see if it exists already hence the hashmap/set imnplementation (line 45-47).

Intuitively it is an XY graph where each box is represented by [x][y] or [row position] [column position].

If we think of the sudoku board as a 9x9 grid, and we need to divide it into a 3x3 grid, it's dividing the values of the row/column position by 3. The trick to the problem is making use of % (remainder) to do exactly that. with arrays being 0 indexed, that means 0-2 % === 0 , 3-5 % === 1, 6-8 % === 2. 

Then just to further go over the code. 

We write two loops to traverse the board (line 49-50 for the rows and columns positions).
If a given map has a number already, we early return (55-61).
If not, to keep track of numbers we pass by (64-70), we add it to the appropriate row, column, and 3x3 squares.
*/