/*
 * @lc app=leetcode.cn id=1041 lang=javascript
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;
  let direction = 0; // 0: 北, 1: 东, 2: 南, 3: 西

  // 定义方向数组，顺时针方向
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (const instruction of instructions) {
    if (instruction === "G") {
      x += directions[direction][0];
      y += directions[direction][1];
    } else if (instruction === "L") {
      direction = (direction + 3) % 4; // 左转 90 度
    } else if (instruction === "R") {
      direction = (direction + 1) % 4; // 右转 90 度
    }
  }

  return (x === 0 && y === 0) || direction !== 0;
};
// @lc code=end
