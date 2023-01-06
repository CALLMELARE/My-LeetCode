/*
 * @lc app=leetcode.cn id=482 lang=cpp
 *
 * [482] 密钥格式化
 */

// @lc code=start
class Solution
{
public:
    string licenseKeyFormatting(string s, int k)
    {
        for (int i = s.size() - 1; i >= 0; i--)
        {
            if (s[i] != '-')
            {
                ans.push_back(toupper(s[i]));
                count++;
                if (count % k == 0)
                    ans.push_back('-');
            }
        }
        if (ans.size() > 0 && ans.back() == '-')
            ans.pop_back();
        reverse(ans.begin(), ans.end());
        return ans;
    }

private:
    string ans;
    int count = 0;
};
// @lc code=end
