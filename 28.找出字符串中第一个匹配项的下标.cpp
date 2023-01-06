/*
 * @lc app=leetcode.cn id=28 lang=cpp
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
class Solution
{
public:
    int strStr(string haystack, string needle)
    {
        // KMP
        int n = haystack.size(), m = needle.size();
        vector<int> next(m);
        int i, j;
        if (m == 0)
            return 0;
        for (i = 1, j = 0; i < m; i++)
        {
            while (j > 0 && needle[i] != needle[j])
            {
                j = next[j - 1];
            }
            if (needle[i] == needle[j])
            {
                j++;
            }
            next[i] = j;
        }
        for (i = 0, j = 0; i < n; i++)
        {
            while (j > 0 && haystack[i] != needle[j])
            {
                j = next[j - 1];
            }
            if (haystack[i] == needle[j])
            {
                j++;
            }
            if (j == m)
            {
                return i - m + 1;
            }
        }
        return -1;
    }
};
// @lc code=end
