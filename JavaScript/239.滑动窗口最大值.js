/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = []; // 双端队列
  const result = []; // 结果数组

  for (let i = 0; i < nums.length; i++) {
    // 如果队列不为空且队列中的第一个元素的索引已经超出滑动窗口的范围，则将队列中的第一个元素移除
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 将当前元素索引加入队列
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    // 如果当前滑动窗口的大小大于等于 k，则将当前滑动窗口的最大值加入结果数组
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};
// @lc code=end
