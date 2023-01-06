/*
 * @lc app=leetcode.cn id=205 lang=cpp
 *
 * [205] 同构字符串
 */

// @lc code=start
class Solution
{
public:
    bool isIsomorphic(string s, string t)
    {
        int len = s.size();
        for (int i = 0; i < len; i++)
        {
            char x = s[i], y = t[i];
            if ((m1.count(x) && m1[x] != y) || (m2.count(y) && m2[y] != x))
                return false;
            m1[x] = y;
            m2[y] = x;
        }
        return true;
    }

private:
    unordered_map<char, char> m1;
    unordered_map<char, char> m2;
};
// @lc code=end
