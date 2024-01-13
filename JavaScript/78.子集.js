/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  function backtrack(index, temp) {
    result.push([...temp]);

    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(i + 1, temp);
      temp.pop();
    }
  }

  backtrack(0, []);
  return result;
};
// @lc code=end
