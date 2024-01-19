/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const len = salary.length;
  let maxn = 0,
    minn = Number.MAX_SAFE_INTEGER;
  const sum = salary.reduce((p, c) => {
    maxn = Math.max(maxn, c);
    minn = Math.min(minn, c);
    return p + c;
  }, 0);
  return (sum - maxn - minn) / (len - 2);
};
// @lc code=end
