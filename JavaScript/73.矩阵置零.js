/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  // 检查第一行和第一列是否有0
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // 使用第一行和第一列进行标记
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 将对应元素置为0
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 处理第一行和第一列
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
};

// @lc code=end
