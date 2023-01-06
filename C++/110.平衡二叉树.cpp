/*
 * @lc app=leetcode.cn id=110 lang=cpp
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    int height(TreeNode *root)
    {
        if (root == nullptr)
            return 0;
        int lHeight = height(root->left);
        int rHeight = height(root->right);
        if (lHeight == -1 || rHeight == -1 || abs(lHeight - rHeight) > 1)
            return -1;
        else
            return max(lHeight, rHeight) + 1;
    }
    bool isBalanced(TreeNode *root)
    {
        return height(root) >= 0;
    }
};
// @lc code=end
