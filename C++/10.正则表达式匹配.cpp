/*
 * @lc app=leetcode.cn id=10 lang=cpp
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
class Solution
{
public:
    bool isMatch(string s, string p)
    {
        if (p.empty())
            return s.empty();
        if (p.size() == 1)
        {
            return (s.size() == 1 && (s[0] == p[0] || p[0] == '.'));
        }
        if (p[1] != '*')
        {
            if (s.empty())
                return false;
            return (s[0] == p[0] || p[0] == '.') && isMatch(s.substr(1), p.substr(1));
        }
        while (!s.empty() && (s[0] == p[0] || p[0] == '.'))
        {
            if (isMatch(s, p.substr(2)))
                return true;
            s = s.substr(1);
        }
        return isMatch(s, p.substr(2));
    }
};
// @lc code=end
