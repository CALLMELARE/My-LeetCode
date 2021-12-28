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