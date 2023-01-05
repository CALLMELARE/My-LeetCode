/*
 * @lc app=leetcode.cn id=485 lang=cpp
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
class Solution
{
public:
    int findMaxConsecutiveOnes(vector<int> &nums)
    {
        int len = nums.size(), count = 0;
        for (int i = 0; i < len; i++)
        {
            if (nums[i] == 1)
            {
                count++;
            }
            else
            {
                maxCount = maxCount > count ? maxCount : count;
                count = 0;
            }
        }

        return maxCount > count ? maxCount : count;
    }

private:
    int maxCount = 0;
};
// @lc code=end
