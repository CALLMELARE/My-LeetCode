/*
 * @lc app=leetcode.cn id=56 lang=cpp
 *
 * [56] 合并区间
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> merge(vector<vector<int>> &intervals)
    {
        sort(intervals.begin(), intervals.end());
        for (int i = 0; i < intervals.size();)
        {
            int t = intervals[i][1];
            int j = i + 1;
            while (j < intervals.size() && intervals[j][0] <= t)
            {
                t = max(t, intervals[j][1]);
                j++;
            }
            ans.push_back({intervals[i][0], t});
            i = j;
        }
        return ans;
    }

private:
    vector<vector<int>> ans;
};
// @lc code=end
