/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low === high && nums[low] === target ? low : -1;
};
// @lc code=end
