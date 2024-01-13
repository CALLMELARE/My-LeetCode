/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(temp, sum, index) {
    if (sum === target) {
      result.push([...temp]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] > target) {
        continue;
      }

      temp.push(candidates[i]);
      backtrack(temp, sum + candidates[i], i);
      temp.pop();
    }
  }

  backtrack([], 0, 0);
  return result;
};
// @lc code=end
