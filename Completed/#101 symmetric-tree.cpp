class Solution
{
public:
    bool balance(TreeNode *l, TreeNode *r)
    {
        if (!l && !r)
            return true;
        if (!l || !r)
            return false;
        return l->val == r->val && balance(l->left, r->right) && balance(l->right, r->left);
    }

    bool isSymmetric(TreeNode *root)
    {
        return balance(root, root);
    }
};