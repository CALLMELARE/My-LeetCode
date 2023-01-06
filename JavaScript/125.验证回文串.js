/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const isLetter = (c) => {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
};

const isDigit = (c) => {
  return c >= "0" && c <= "9";
};

const isLetterOrDigit = (c) => {
  return isLetter(c) || isDigit(c);
};

var isPalindrome = function (s) {
  const len = s.length;
  let l = 0,
    r = len - 1;
  while (l < r) {
    while (l < r && !isLetterOrDigit(s[l])) l++;
    while (l < r && !isLetterOrDigit(s[r])) r--;
    if (l < r) {
      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }
  }
  return true;
};
// @lc code=end
