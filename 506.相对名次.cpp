/*
 * @lc app=leetcode.cn id=506 lang=cpp
 *
 * [506] 相对名次
 */

// @lc code=start
class Solution
{
public:
    vector<string> findRelativeRanks(vector<int> &score)
    {
        int len = score.size();
        for (int i = 0; i < len; i++)
            v.emplace_back(make_pair(-score[i], i));
        sort(v.begin(), v.end());
        vector<string> ans(len);
        for (int i = 0; i < len; i++)
        {
            if (i >= 3)
                ans[v[i].second] = to_string(i + 1);
            else if (i == 0)
                ans[v[i].second] = "Gold Medal";
            else if (i == 1)
                ans[v[i].second] = "Silver Medal";
            else if (i == 2)
                ans[v[i].second] = "Bronze Medal";
        }
        return ans;
    }

private:
    vector<pair<int, int>> v;
};
// @lc code=end
