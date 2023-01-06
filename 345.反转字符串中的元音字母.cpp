/*
 * @lc app=leetcode.cn id=345 lang=cpp
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
class Solution
{
public:
    string reverseVowels(string s)
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
        return s == 'a' || s == 'A' || s == 'e' || s == 'E' || s == 'i' || s == 'I' || s == 'o' || s == 'O' || s == 'u' || s == 'U';
    }
};
// @lc code=end
