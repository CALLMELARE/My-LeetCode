/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [];
  let freshCount = 0;
  let minutes = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) return 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          grid[newRow][newCol] !== 1
        ) {
          continue;
        }

        // 将新鲜橘子变为腐烂橘子，并将其加入队列
        grid[newRow][newCol] = 2;
        queue.push([newRow, newCol]);
        freshCount--;
      }
    }
    minutes++;
  }

  if (freshCount > 0) return -1;

  return minutes - 1;
};
// @lc code=end
