/*
 * @lc app=leetcode.cn id=39 lang=cpp
 *
 * [39] 组合总和
 */

// @lc code=start
class Solution
{
public:
    void DFS(vector<int> &can, int target, vector<vector<int>> &ans, vector<int> &combine, int index)
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
        DFS(can, target, ans, combine, index + 1);
        if (target - can[index] >= 0)
        {
            combine.push_back(can[index]);
            DFS(can, target - can[index], ans, combine, index);
            combine.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int> &candidates, int target)
    {
        vector<vector<int>> ans;
        vector<int> combine;
        DFS(candidates, target, ans, combine, 0);
        return ans;
    }
};
// @lc code=end
