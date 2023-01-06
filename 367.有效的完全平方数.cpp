/*
 * @lc app=leetcode.cn id=367 lang=cpp
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
class Solution
{
public:
    bool isPerfectSquare(int num)
    {
        int l = 0, r = num;
        while (l <= r)
        {
            int mid = l + (r - l) / 2;
            long sq = (long)mid * mid;
            if (sq < num)
                l = mid + 1;
            else if (sq > num)
                r = mid - 1;
            else
                return true;
        }
        return false;
    }
};
// @lc code=end
