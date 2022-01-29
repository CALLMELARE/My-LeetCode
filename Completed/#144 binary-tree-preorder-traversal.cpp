class Solution
{
public:
    void pre(TreeNode *root, vector<int> &ans)
    {
        if (root == nullptr)
            return;
        ans.push_back(root->val);
        pre(root->left, ans);
        pre(root->right, ans);
    }
    vector<int> preorderTraversal(TreeNode *root)
    {
        vector<int> ans;
        pre(root, ans);
        return ans;
    }
};