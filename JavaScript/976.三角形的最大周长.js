/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  const edges = nums.sort((a, b) => b - a);
  for (let i = edges.length - 1; i >= 2; i--) {
    if (edges[i - 2] + edges[i - 1] > edges[i]) {
      return edges[i - 2] + edges[i - 1] + edges[i];
    }
  }
  return 0;
};
// @lc code=end
