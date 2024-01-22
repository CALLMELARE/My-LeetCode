/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let result = 0;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < s.length && /\d/.test(s[i])) {
    result = result * 10 + parseInt(s[i], 10);
    i++;
  }

  result *= sign;

  result = Math.max(Math.min(result, Math.pow(2, 31) - 1), Math.pow(-2, 31));

  return result;
};
// @lc code=end
