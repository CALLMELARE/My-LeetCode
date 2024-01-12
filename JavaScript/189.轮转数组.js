/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  const temp = nums.slice(n - k);
  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }
  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }
};

// @lc code=end
