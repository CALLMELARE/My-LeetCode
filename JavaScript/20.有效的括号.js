/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = new Set();
  stack.add(")");
  stack.add("}");
  stack.add("]");

  const match = new Map();
  match.set(")", "(");
  match.set("}", "{");
  match.set("]", "[");

  const stackArray = [];

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];

    if (stack.has(char)) {
      if (
        stackArray.length &&
        stackArray[stackArray.length - 1] === match.get(char)
      ) {
        stackArray.pop();
      } else {
        return false;
      }
    } else {
      stackArray.push(char);
    }
  }

  return stackArray.length === 0;
};
// @lc code=end
