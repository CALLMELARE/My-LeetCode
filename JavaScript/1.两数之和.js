/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hash.has(complement)) {
      result.push(hash.get(complement), i);
      return result;
    }
    hash.set(nums[i], i);
  }

  return [-1, -1];
};
// @lc code=end
