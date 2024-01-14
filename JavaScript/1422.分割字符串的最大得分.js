/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let score = 0;
  const n = s.length;
  if (s[0] === "0") {
    score++;
  }
  for (let i = 1; i < n; i++) {
    if (s[i] === "1") {
      score++;
    }
  }
  let ans = score;
  for (let i = 1; i < n - 1; i++) {
    if (s[i] == "0") {
      score++;
    } else {
      score--;
    }
    ans = Math.max(ans, score);
  }
  return ans;
};
// @lc code=end
