/*
 * @lc app=leetcode.cn id=67 lang=cpp
 *
 * [67] 二进制求和
 */

// @lc code=start
class Solution
{
public:
    string addBinary(string a, string b)
    {
        int len = max(a.size(), b.size());
        int u = 0;
        reverse(a.begin(), a.end());
        reverse(b.begin(), b.end());
        for (int i = 0; i < len; i++)
        {
            u += i < a.size() ? (a.at(i) == '1') : 0;
            u += i < b.size() ? (b.at(i) == '1') : 0;
            ans.push_back((u % 2) ? '1' : '0');
            u /= 2;
        }
        if (u)
        {
            ans.push_back('1');
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }

private:
    string ans;
};
// @lc code=end
