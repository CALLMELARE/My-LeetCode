/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= coins.length; i++) {
    for (let j = coins[i - 1]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
    }
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
// @lc code=end
