/*
 * @lc app=leetcode.cn id=145 lang=cpp
 *
 * [145] 二叉树的后序遍历
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
    void post(TreeNode *root, vector<int> &ans)
    {
        if (root == nullptr)
            return;
        post(root->left, ans);
        post(root->right, ans);
        ans.push_back(root->val);
    }
    vector<int> postorderTraversal(TreeNode *root)
    {
        vector<int> ans;
        post(root, ans);
        return ans;
    }
};
// @lc code=end
