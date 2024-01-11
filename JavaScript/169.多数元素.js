/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = new Map();
  let majority = 0,
    cnt = 0;

  for (let num of nums) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }

    if (count.get(num) > cnt) {
      majority = num;
      cnt = count.get(num);
    }
  }

  return majority;
}

// @lc code=end
