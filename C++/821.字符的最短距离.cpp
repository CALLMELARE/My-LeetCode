/*
 * @lc app=leetcode.cn id=821 lang=cpp
 *
 * [821] 字符的最短距离
 */

// @lc code=start
class Solution
{
public:
    vector<int> shortestToChar(string s, char c)
    {
        int len = s.size();
        vector<int> ans(len);
        for (int i = 0, index = -len; i < len; i++)
        {
            if (s[i] == c)
                index = i;
            ans[i] = i - index;
        }
        for (int i = len - 1, index = 2 * len; i >= 0; i--)
        {
            if (s[i] == c)
                index = i;
            ans[i] = min(ans[i], index - i);
        }
        return ans;
    }
};
// @lc code=end
