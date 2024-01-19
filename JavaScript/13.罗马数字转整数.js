/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const m = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let res = m.get(s[s.length - 1]);
  for (let i = s.length - 2; i >= 0; i--) {
    const currVal = m.get(s[i]);
    const nextVal = m.get(s[i + 1]);
    if (currVal < nextVal) res -= currVal;
    else res += currVal;
  }
  return res;
};
// @lc code=end
