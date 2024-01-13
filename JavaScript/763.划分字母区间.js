/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastPos = new Map();
  const result = [];

  for (let i = 0; i < s.length; i++) {
    lastPos.set(s[i], i);
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastPos.get(s[i]));

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
// @lc code=end
