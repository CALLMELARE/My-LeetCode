/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  const n = nums.length;

  for (let a = 0; a < n - 2; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }

    let b = a + 1;
    let c = n - 1;
    let target = -nums[a];

    while (b < c) {
      const sum = nums[b] + nums[c];

      if (sum === target) {
        result.push([nums[a], nums[b], nums[c]]);
        while (b < c && nums[b] === nums[b + 1]) b++;
        while (b < c && nums[c] === nums[c - 1]) c--;
        b++;
        c--;
      } else if (sum < target) {
        b++;
      } else {
        c--;
      }
    }
  }

  return result;
};
// @lc code=end
