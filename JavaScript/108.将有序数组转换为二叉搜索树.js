/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return rebuild(nums, 0, nums.length - 1);
};
function rebuild(nums, l, r) {
  if (l > r) {
    return null;
  }
  const mid = Math.floor((l + r + 1) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = rebuild(nums, l, mid - 1);
  root.right = rebuild(nums, mid + 1, r);
  return root;
}
// @lc code=end
