/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const rows = matrix.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        matrix[i][j] = matrix[i][j];
      } else if (j === 0) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]) + matrix[i][j];
      } else if (j === matrix[i].length - 1) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j - 1], matrix[i - 1][j]) + matrix[i][j];
      } else {
        matrix[i][j] =
          Math.min(
            matrix[i - 1][j - 1],
            matrix[i - 1][j],
            matrix[i - 1][j + 1]
          ) + matrix[i][j];
      }
    }
  }
  return Math.min(...matrix[rows - 1]);
};
// @lc code=end
