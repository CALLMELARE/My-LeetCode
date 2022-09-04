class Solution
{
public:
    void dfs(vector<int> &can, int target, vector<vector<int>> &ans, vector<int> &combine, int index)
    {
        if (index == can.size())
        {
            return;
        }
        if (target == 0)
        {
            ans.push_back(combine);
            return;
        }
        dfs(can, target, ans, combine, index + 1);
        if (target - can[index] >= 0)
        {
            combine.push_back(can[index]);
            dfs(can, target - can[index], ans, combine, index);
            combine.pop_back();
        }
    }

    vector<vector<int>> combinationSum(vector<int> &candidates, int target)
    {
        vector<vector<int>>ans;
        vector<int> combine;
        dfs(candidates, target,ans,combine,0);
        return ans;
    }
};