/*
 * @lc app=leetcode.cn id=461 lang=cpp
 *
 * [461] 汉明距离
 */

// @lc code=start
class Solution
{
public:
    int hammingDistance(int x, int y)
    {
        int s = x ^ y, ret = 0;
        while (s)
        {
            s &= s - 1;
            ret++;
        }
        return ret;
    }
};
// @lc code=end
