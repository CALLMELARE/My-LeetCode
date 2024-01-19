/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
    }
    maxWealth = Math.max(maxWealth, customerWealth);
  }

  return maxWealth;
};
// @lc code=end
