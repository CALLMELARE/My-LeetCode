/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  const ans = [];
  inOrder(root, ans);
  return ans;
};
function inOrder(root, ans) {
  if (root === null) {
    return;
  }
  inOrder(root.left, ans);
  ans.push(root.val);
  inOrder(root.right, ans);
}
// @lc code=end
