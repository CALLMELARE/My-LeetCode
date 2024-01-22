/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (const op of operations) {
    if (op === "+") {
      const num1 = stack[stack.length - 1];
      const num2 = stack[stack.length - 2];
      stack.push(num1 + num2);
    } else if (op === "D") {
      const num = stack[stack.length - 1];
      stack.push(num * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(Number(op));
    }
  }

  let sum = 0;
  for (const num of stack) sum += num;

  return sum;
};
// @lc code=end
