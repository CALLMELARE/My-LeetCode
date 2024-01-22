/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  for (let i = 0; i < moves.length; i++) {
    const player = i % 2 === 0 ? "X" : "O";
    const [row, col] = moves[i];
    board[row][col] = player;
  }

  const winningCombinations = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],

    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      if (board[a[0]][a[1]] === "X") {
        return "A";
      } else if (board[a[0]][a[1]] === "O") {
        return "B";
      }
    }
  }

  for (const row of board) {
    if (row.includes(" ")) {
      return "Pending";
    }
  }

  return "Draw";
};
// @lc code=end
