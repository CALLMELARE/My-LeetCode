/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const num = matrix[row][col];

    if (num === target) {
      return true;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
// @lc code=end
