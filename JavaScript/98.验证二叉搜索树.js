/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return check(root, -Infinity, Infinity);
};
function check(node, min, max) {
  if (node === null) return true;
  if (node.val <= min || node.val >= max) return false;
  return check(node.left, min, node.val) && check(node.right, node.val, max);
}
// @lc code=end
