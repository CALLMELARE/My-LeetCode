/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i] =
var deleteAndEarn = function (nums) {
  const maxn = Math.max(...nums);
  const sum = new Array(maxn + 1).fill(0);
  nums.forEach((val) => {
    sum[val] += val;
  });

  const dp = [];
  dp[0] = sum[0];
  dp[1] = Math.max(sum[0], sum[1]);

  for (let i = 2; i < sum.length; i++) {
    dp[i] = Math.max(dp[i - 2] + sum[i], dp[i - 1]);
  }

  return dp[sum.length - 1];
};
// @lc code=end
