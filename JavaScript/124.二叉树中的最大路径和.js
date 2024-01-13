/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let maxSum = Number.NEGATIVE_INFINITY;

  function maxPathSumHelper(node) {
    if (node === null) return 0;
    const leftSum = Math.max(maxPathSumHelper(node.left), 0);
    const rightSum = Math.max(maxPathSumHelper(node.right), 0);
    const sum = node.val + leftSum + rightSum;
    maxSum = Math.max(maxSum, sum);
    return node.val + Math.max(leftSum, rightSum);
  }

  maxPathSumHelper(root);
  return maxSum;
};
// @lc code=end
