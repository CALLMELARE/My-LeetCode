/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0; // 最大直径

  // 递归函数，计算经过每个节点的最长路径
  function calculatePath(node) {
    if (node === null) {
      return 0;
    }

    // 递归计算左子树和右子树的高度
    const leftHeight = calculatePath(node.left);
    const rightHeight = calculatePath(node.right);

    // 更新最大直径
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // 返回当前节点的高度（左右子树中较大的高度加1）
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // 调用递归函数，计算直径
  calculatePath(root);

  return maxDiameter;
};
// @lc code=end
