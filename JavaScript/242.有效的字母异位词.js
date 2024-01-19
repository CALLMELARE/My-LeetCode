/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (const c of t) {
    map.set(c, (map.get(c) || 0) - 1);
  }
  return Array.from(map.values()).every((v) => v === 0);
};
// @lc code=end
