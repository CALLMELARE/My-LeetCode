/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const xArray = nums.slice(0, n);
  const yArray = nums.slice(n);

  return xArray.flatMap((num, index) => [num, yArray[index]]);
};
// @lc code=end
