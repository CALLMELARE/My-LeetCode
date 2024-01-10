/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let count = 0,
    maxn = 0;
  if (nums.length == 1) return 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1] + 1) {
      count++;
    } else if (arr[i] === arr[i - 1]) {
      count += 0;
    } else {
      maxn = Math.max(maxn, count + 1);
      count = 0;
    }

    maxn = Math.max(maxn, count + 1);
  }

  return maxn;
};
// @lc code=end
