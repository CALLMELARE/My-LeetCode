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
        reverse(a.begin(), a.end());
        reverse(b.begin(), b.end());

        int n = max(a.size(), b.size()), p = 0;
        for (size_t i = 0; i < n; ++i)
        {
            p += i < a.size() ? (a.at(i) == '1') : 0;
            p += i < b.size() ? (b.at(i) == '1') : 0;
            ans.push_back((p % 2) ? '1' : '0');
            p /= 2;
        }

        if (p)
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
