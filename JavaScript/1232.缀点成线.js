/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // 处理平行于y轴的情况
  if (x2 - x1 === 0) {
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      if (x !== x1) {
        return false;
      }
    }
    return true;
  }

  const slope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    // 处理平行于x轴的情况
    if (x - x1 === 0) {
      if (slope !== Infinity) {
        return false;
      }
    } else {
      const currentSlope = (y - y1) / (x - x1);
      if (currentSlope !== slope) {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end
