/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
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
    void in(TreeNode *root, vector<int> &ans)
    {
        if (root == nullptr)
            return;
        in(root->left, ans);
        ans.push_back(root->val);
        in(root->right, ans);
    }
    vector<int> inorderTraversal(TreeNode *root)
    {
        vector<int> ans;
        in(root, ans);
        return ans;
    }
};
// @lc code=end
