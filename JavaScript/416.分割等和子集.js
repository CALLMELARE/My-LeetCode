/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  let n = nums.length;
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 !== 0) {
    return false;
  }
  let c = sum / 2;
  let dp = new Array(c + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = c; j >= nums[i - 1]; j--) {
      dp[j] = dp[j] || dp[j - nums[i - 1]];
    }
  }
  return dp[c];
};
// @lc code=end
