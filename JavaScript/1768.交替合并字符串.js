/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const arr = [];
  const minLen = Math.min(word1.length, word2.length);
  for (let i = 0; i < minLen; i++) {
    arr.push(word1[i], word2[i]);
  }
  return arr.join("") + word1.substring(minLen) + word2.substring(minLen);
};
// @lc code=end
