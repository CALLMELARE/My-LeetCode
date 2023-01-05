/*
 * @lc app=leetcode.cn id=278 lang=cpp
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution
{
public:
    int firstBadVersion(int n)
    {
        int l = 1, r = n, ans = 0;
        if (n == 1)
        {
            return 1;
        }
        while (l < r)
        {
            int mid = l + (r - l) / 2;
            if (isBadVersion(mid))
            {
                r = mid;
            }
            else
            {
                l = mid + 1;
            }
        }
        return l;
    }
};
// @lc code=end
