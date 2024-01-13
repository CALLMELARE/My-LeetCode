/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }

  const pathsFromRoot = findPaths(root, targetSum);
  const pathsFromLeft = pathSum(root.left, targetSum);
  const pathsFromRight = pathSum(root.right, targetSum);

  return pathsFromRoot + pathsFromLeft + pathsFromRight;
};

function findPaths(node, targetSum) {
  if (node === null) {
    return 0;
  }

  let count = 0;

  if (node.val === targetSum) {
    count++;
  }

  count += findPaths(node.left, targetSum - node.val);
  count += findPaths(node.right, targetSum - node.val);

  return count;
}
// @lc code=end
