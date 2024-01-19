/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i === 0 && s.substring(0, i).repeat(s.length / i) === s)
      return true;
  }
  return false;
};
// @lc code=end
