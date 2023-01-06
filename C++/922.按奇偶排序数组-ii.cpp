/*
 * @lc app=leetcode.cn id=922 lang=cpp
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
class Solution
{
public:
    vector<int> sortArrayByParityII(vector<int> &nums)
    {

        int l = nums.size();
        int j = 1;
        for (int i = 0; i < l; i += 2)
        {
            if (nums[i] % 2 == 1)
            {
                while (nums[j] % 2 == 1)
                {
                    j += 2;
                }
                swap(nums[i], nums[j]);
            }
        }
        return nums;
    }
};
// @lc code=end
