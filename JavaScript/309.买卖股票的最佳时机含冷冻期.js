/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 持有
// f[i][0] = Math.max(f[i-1][0],f[i-1][2]-pricec[i])
// 不持有、冷冻期
// f[i][1] = f[i-1][0] + prices[i]
// 不持有、非冷冻期
// f[i][2] = Math.max(f[i-1][1],f[i-1][2])

// ans = Math.max(f[n-1][0],f[n-1][1],f[n-1][2])
var maxProfit = function (prices) {
  const len = prices.length;
  if (len === 0) return 0;

  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(3).fill(0);
  }

  dp[0][0] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }

  return Math.max(dp[len - 1][1], dp[len - 1][2]);
};
// @lc code=end
