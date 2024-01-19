/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const count = new Map();
  s.split("").forEach((c) => {
    count.set(c, (count.get(c) || 0) + 1);
  });
  t.split("").forEach((c) => {
    count.set(c, (count.get(c) || 0) - 1);
  });
  for (const [key, val] of count) {
    if (val !== 0) {
      return key;
    }
  }
};
// @lc code=end
