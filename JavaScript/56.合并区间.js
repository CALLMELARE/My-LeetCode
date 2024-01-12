/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 按照起始位置进行升序排序
  const merged = [intervals[0]]; // 结果数组，初始值为排序后的第一个区间

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    if (currInterval[0] > lastMergedInterval[1]) {
      // 当前区间与最后一个合并区间不重叠，直接加入结果数组
      merged.push(currInterval);
    } else {
      // 当前区间与最后一个合并区间重叠，合并区间的结束位置取两者的最大值
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currInterval[1]);
    }
  }

  return merged;
};
// @lc code=end
