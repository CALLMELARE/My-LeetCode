/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const used = Array(nums.length).fill(false);

  backtrack([]);

  function backtrack(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  return res;
};
// @lc code=end
