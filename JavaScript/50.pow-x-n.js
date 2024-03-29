/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) return 1 / myPow(x, -n);

  if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half;
  } else return x * myPow(x, n - 1);
};
// @lc code=end
