/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子数组和
 */

// @lc code=start
class Solution
{
public:
    int maxSubArray(vector<int> &nums)
    {
        int pre = 0, maxn = nums[0];
        for (int x : nums)
        {
            pre = max(x + pre, x);
            maxn = max(maxn, pre);
        }
        return maxn;
    }
};
// @lc code=end
