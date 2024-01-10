/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */ 5;
var singleNumber = function (nums) {
  let XOR = 0;
  for (let i = 0; i < nums.length; i++) {
    XOR ^= nums[i];
  }
  return XOR;
};
// @lc code=end
