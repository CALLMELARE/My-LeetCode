/*
 * @lc app=leetcode.cn id=868 lang=cpp
 *
 * [868] 二进制间距
 */

// @lc code=start
class Solution
{
public:
    int binaryGap(int n)
    {
        int p = -1, ans = 0, i = 0;
        while (n > 0)
        {
            if (n & 1)
            {
                if (p != -1)
                    ans = max(i - p, ans);
                p = i;
            }
            n >>= 1;
            i++;
        }
        return ans;
    }
};
// @lc code=end
