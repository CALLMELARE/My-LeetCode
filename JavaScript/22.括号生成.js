/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  backtrack("", 0, 0, n, result);
  return result;
};
function backtrack(current, openCount, closeCount, n, result) {
  if (openCount === n && closeCount === n) {
    result.push(current);
    return;
  }

  if (openCount < n) {
    backtrack(current + "(", openCount + 1, closeCount, n, result);
  }

  if (closeCount < openCount) {
    backtrack(current + ")", openCount, closeCount + 1, n, result);
  }
}
// @lc code=end
