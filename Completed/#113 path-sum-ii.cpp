class Solution
{
public:
    vector<vector<int>> ans;
    vector<int> path;

    void dfs(TreeNode *root, int sum)
    {
        if (root == nullptr)
            return;
        path.emplace_back(root->val);
        sum -= root->val;
        if (root->left == nullptr && root->right == nullptr && sum == 0)
            ans.emplace_back(path);
        dfs(root->left, sum);
        dfs(root->right, sum);
        path.pop_back();
    }

    vector<vector<int>> pathSum(TreeNode *root, int targetSum)
    {
        dfs(root, targetSum);
        return ans;
    }
};