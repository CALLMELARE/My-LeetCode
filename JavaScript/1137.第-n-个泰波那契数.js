/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const triArr = new Array(n + 1).fill(null);
  triArr[0] = 0;
  triArr[1] = 1;
  triArr[2] = 1;
  for (let i = 3; i <= n; i++) {
    triArr[i] = triArr[i - 1] + triArr[i - 2] + triArr[i - 3];
  }
  return triArr[n];
};
// @lc code=end
