/*
 * @lc app=leetcode.cn id=701 lang=cpp
 *
 * [701] 二叉搜索树中的插入操作
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
    TreeNode *insertIntoBST(TreeNode *root, int val)
    {
        if (root == nullptr)
            return new TreeNode(val);
        TreeNode *i = root;
        while (i != nullptr)
        {
            if (val < i->val)
            {
                if (i->left == nullptr)
                {
                    i->left = new TreeNode(val);
                    break;
                }
                else
                {
                    i = i->left;
                }
            }
            else
            {
                if (i->right == nullptr)
                {
                    i->right = new TreeNode(val);
                    break;
                }
                else
                {
                    i = i->right;
                }
            }
        }
        return root;
    }
};
// @lc code=end
