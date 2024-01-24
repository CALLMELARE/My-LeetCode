/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const fibArr = new Array(n + 1).fill(null);
  fibArr[1] = 1;
  fibArr[2] = 1;
  for (let i = 3; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n];
};
// @lc code=end
