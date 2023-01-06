/*
 * @lc app=leetcode.cn id=14 lang=cpp
 *
 * [14] 最长公共前缀
 */

// @lc code=start
class Solution
{
public:
    string longestCommonPrefix(vector<string> &strs)
    {
        if (strs.empty())
            return "";
        string res = "";
        for (int j = 0; j < strs[0].size(); ++j)
        {
            char c = strs[0][j];
            for (int i = 1; i < strs.size(); ++i)
            {
                if (j >= strs[i].size() || strs[i][j] != c)
                {
                    return res;
                }
            }
            res.push_back(c);
        }
        return res;
    }
};
// @lc code=end
