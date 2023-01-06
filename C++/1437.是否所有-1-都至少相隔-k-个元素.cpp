/*
 * @lc app=leetcode.cn id=1437 lang=cpp
 *
 * [1437] 是否所有 1 都至少相隔 k 个元素
 */

// @lc code=start
class Solution
{
public:
    bool kLengthApart(vector<int> &nums, int k)
    {
        int l = -1, r = -1;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] == 1)
            {
                if (l == -1)
                    l = i;
                else
                {
                    r = i;
                    if (r - l <= k)
                        return false;
                    l = r;
                }
            }
        }
        return true;
    }
};
// @lc code=end
