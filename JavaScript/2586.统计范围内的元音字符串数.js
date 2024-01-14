/*
 * @lc app=leetcode.cn id=2586 lang=javascript
 *
 * [2586] 统计范围内的元音字符串数
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i].toLowerCase();
    if (/^[aeiou].*[aeiou]$/.test(word)) {
      count++;
    }
  }

  return count;
};
// @lc code=end
