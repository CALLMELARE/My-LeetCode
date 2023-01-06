/*
 * @lc app=leetcode.cn id=75 lang=cpp
 *
 * [75] 颜色分类
 */

// @lc code=start
class Solution
{
public:
    void sortColors(vector<int> &nums)
    {
        int len = nums.size();
        int p = 0, q = 0;
        for (int i = 0; i < len; i++)
        {
            if (nums[i] == 1)
            {
                swap(nums[i], nums[q]);
                q++;
            }
            else if (nums[i] == 0)
            {
                swap(nums[i], nums[p]);
                if (p < q)
                    swap(nums[i], nums[q]);
                p++;
                q++;
            }
        }
    }
};
// @lc code=end
