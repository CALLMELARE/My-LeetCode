/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  let curEnd = 0;
  let curFarthest = 0;
  let jumps = 0;

  for (let i = 0; i < n - 1; i++) {
    curFarthest = Math.max(curFarthest, i + nums[i]);
    if (i === curEnd) {
      curEnd = curFarthest;
      jumps++;
    }
  }

  return jumps;
};
// @lc code=end
