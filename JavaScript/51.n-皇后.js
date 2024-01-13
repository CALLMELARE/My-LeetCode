/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();

  function backtrack(row) {
    if (row === n) {
      const solution = board.map((row) => row.join(""));
      result.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      const diagonal1 = row + col;
      const diagonal2 = row - col;

      if (
        cols.has(col) ||
        diagonals1.has(diagonal1) ||
        diagonals2.has(diagonal2)
      ) {
        continue;
      }

      board[row][col] = "Q";
      cols.add(col);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      backtrack(row + 1);
      board[row][col] = ".";
      cols.delete(col);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }

  backtrack(0);
  return result;
};
// @lc code=end
