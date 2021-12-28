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