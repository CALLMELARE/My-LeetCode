/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  return balance(root, root);
};

function balance(l, r) {
  if (!l && !r) return true;
  if (!l || !r) return false;
  return (
    l.val === r.val && balance(l.left, r.right) && balance(l.right, r.left)
  );
}
// @lc code=end
