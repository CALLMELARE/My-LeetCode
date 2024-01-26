/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// dp[i] += dp[i-1]
// dp[i] += dp[i-2]
var numDecodings = function (s) {
  const len = s.length;
  const dp = new Array(len + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= len; i++) {
    if (s[i - 1] !== "0") dp[i] += dp[i - 1];
    if (
      i > 1 &&
      s[i - 2] !== "0" &&
      (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))
    )
      dp[i] += dp[i - 2];
  }

  return dp[len];
};
// @lc code=end
