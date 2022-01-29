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
    int diameterOfBinaryTree(TreeNode *root)
    {
        if (root)
            getDepth(root);
        return ans - 1;
    }

private:
    int ans = 0;
    int getDepth(TreeNode *t)
    {
        if (t == nullptr)
            return 0;
        int lDepth = getDepth(t->left);
        int rDepth = getDepth(t->right);
        ans = max(ans, lDepth + rDepth + 1);
        return max(lDepth, rDepth) + 1;
    }
};