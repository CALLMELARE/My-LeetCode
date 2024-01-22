/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0;
  moves.split("").forEach((mv) => {
    if (mv === "L") x--;
    if (mv === "R") x++;
    if (mv === "U") y--;
    if (mv === "D") y++;
  });

  return x === 0 && y === 0;
};
// @lc code=end
