/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const last = Array(255).fill(-1);
  let ans = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (last[charCode] >= left) {
      left = last[charCode] + 1;
    }

    last[charCode] = i;
    ans = Math.max(ans, i - left + 1);
  }

  return ans;
};
// @lc code=end
