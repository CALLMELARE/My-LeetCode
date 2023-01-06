/*
 * @lc app=leetcode.cn id=917 lang=cpp
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
class Solution
{
public:
    string reverseOnlyLetters(string s)
    {
        if (s.empty())
            return s;
        int l = 0, r = s.size() - 1;
        while (l < r)
        {
            if (!check(s[l]))
                l++;
            if (!check(s[r]))
                r--;
            if (check(s[l]) && check(s[r]))
            {
                char tmp = s[l];
                s[l] = s[r];
                s[r] = tmp;
                l++;
                r--;
            }
        }
        return s;
    }
    bool check(char s)
    {
        return isalpha(s);
    }
};
// @lc code=end
