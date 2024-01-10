/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const arr = [];
  pre(root, arr);
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1],
      curr = arr[i];
    prev.left = null;
    prev.right = curr;
  }
};

const pre = (root, arr) => {
  if (root != null) {
    arr.push(root);
    pre(root.left, arr);
    pre(root.right, arr);
  }
};
// @lc code=end
