/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans.push(i);
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      ans.push(i);
      break;
    }
  }
  if (!ans.length) ans.push(-1, -1);
  return ans;
};
// @lc code=end
