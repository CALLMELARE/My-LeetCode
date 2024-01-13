/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  if (root === null) return result;
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    let rightVal = null;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      rightVal = node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(rightVal);
  }

  return result;
};
// @lc code=end
