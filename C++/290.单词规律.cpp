/*
 * @lc app=leetcode.cn id=290 lang=cpp
 *
 * [290] 单词规律
 */

// @lc code=start
class Solution
{
public:
    bool wordPattern(string pattern, string s)
    {
        int i = 0, len = s.size();
        for (auto c : pattern)
        {
            if (i >= len)
                return false;
            int j = i;
            while (j < len && s[j] != ' ')
                j++;
            const string &tmp = s.substr(i, j - i);
            if (s2c.count(tmp) && s2c[tmp] != c)
                return false;
            if (c2s.count(c) && c2s[c] != tmp)
                return false;
            s2c[tmp] = c;
            c2s[c] = tmp;
            i = j + 1;
        }
        return i >= len;
    }

private:
    unordered_map<string, char> s2c;
    unordered_map<char, string> c2s;
};
// @lc code=end
