/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  // 寻找相遇点
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  // 将慢指针重新设置为数组的第一个元素
  slow = nums[0];

  // 寻找重复的元素
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
// @lc code=end
