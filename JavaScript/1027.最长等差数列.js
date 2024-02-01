/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i][k] = f[i-1][k]
// dp[i][k] = f[i-1][k] + 1
var longestArithSeqLength = function (nums) {
  const maxn = Math.max(...nums);
  const minn = Math.min(...nums);
  const gap = maxn - minn;
  let ans = 1;
  for (let k = -gap; k <= gap; k++) {
    const dp = new Array(maxn + 1).fill(0);
    for (const num of nums) {
      const prev = num - k;
      if (prev >= minn && prev <= maxn && dp[prev]) {
        dp[num] = Math.max(dp[num], dp[prev] + 1);
        ans = Math.max(ans, dp[num]);
      }
      dp[num] = Math.max(dp[num], 1);
    }
  }
  return ans;
};
// @lc code=end
