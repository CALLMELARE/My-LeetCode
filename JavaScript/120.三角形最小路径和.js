/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

// dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j+1]) + triangle[i][j];
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === 0) {
        triangle[i][j] = triangle[i][j];
      } else if (j === 0) {
        triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
      } else {
        triangle[i][j] =
          Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
      }
    }
  }
  return Math.min(...triangle[rows - 1]);
};
// @lc code=end
