/*
 * @lc app=leetcode.cn id=387 lang=cpp
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
class Solution
{
public:
    int firstUniqChar(string s)
    {

        for (char ch : s)
        {
            f[ch]++;
        }
        for (int i = 0; i < s.size(); ++i)
        {
            if (f[s[i]] == 1)
            {
                return i;
            }
        }
        return -1;
    }

private:
    unordered_map<int, int> f;
};
// @lc code=end
