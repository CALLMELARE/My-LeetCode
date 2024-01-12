/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sortedNums = Array.from(freqMap.keys()).sort(
    (a, b) => freqMap.get(b) - freqMap.get(a)
  );

  return sortedNums.slice(0, k);
};
// @lc code=end
