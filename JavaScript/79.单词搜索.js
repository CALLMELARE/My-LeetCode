/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function backtrack(row, col, index) {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    visited[row][col] = true;

    const res =
      backtrack(row - 1, col, index + 1) ||
      backtrack(row + 1, col, index + 1) ||
      backtrack(row, col - 1, index + 1) ||
      backtrack(row, col + 1, index + 1);

    visited[row][col] = false;

    return res;
  }
};
// @lc code=end
