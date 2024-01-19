/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let count = 0;
  if (low % 2 !== 0 || high % 2 !== 0) count++;
  count += Math.floor((high - low) / 2);
  return count;
};
// @lc code=end
