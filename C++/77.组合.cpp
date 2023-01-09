/*
 * @lc app=leetcode.cn id=77 lang=cpp
 *
 * [77] 组合
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> combine(int n, int k)
    {
        for (int i = 1; i <= k; i++)
            v.push_back(i);
        v.push_back(n + 1);
        while (index < k)
        {
            ans.emplace_back(v.begin(), v.begin() + k);
            index = 0;
            while (index < k && v[index] + 1 == v[index + 1])
            {
                v[index] = index + 1;
                index++;
            }
            v[index]++;
        }
        return ans;
    }

private:
    int index = 0;
    vector<int> v;
    vector<vector<int>> ans;
};
// @lc code=end
