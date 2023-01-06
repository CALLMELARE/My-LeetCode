/*
 * @lc app=leetcode.cn id=3 lang=cpp
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        int ans = 0, left = 0, len = s.length();
        int last[255];
        memset(last, -1, sizeof last);

        for (int i = 0; i < len; i++)
        {
            if (last[s[i]] >= left)
                left = last[s[i]] + 1;
            last[s[i]] = i;
            ans = max(ans, i - left + 1);
        }
        return ans;
    }
};
// @lc code=end
