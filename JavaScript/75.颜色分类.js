/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let cur = 0;

  while (cur <= right) {
    if (nums[cur] === 0) {
      [nums[cur], nums[left]] = [nums[left], nums[cur]];
      left++;
      cur++;
    } else if (nums[cur] === 2) {
      [nums[cur], nums[right]] = [nums[right], nums[cur]];
      right--;
    } else {
      cur++;
    }
  }

  return nums;
};
// @lc code=end
