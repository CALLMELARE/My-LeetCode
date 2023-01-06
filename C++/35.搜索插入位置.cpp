/*
 * @lc app=leetcode.cn id=35 lang=cpp
 *
 * [35] 搜索插入位置
 */

// @lc code=start
class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int l = 0, r = nums.size() - 1;
        int mid, ans = nums.size();
        bool found = false;
        while (l <= r)
        {
            mid = l + (r - l) / 2;
            if (nums[mid] >= target)
            {
                // left side
                ans = mid;
                r = mid - 1;
            }
            else if (nums[mid] < target)
            {
                // right side
                l = mid + 1;
            }
        }
        return ans;
    }
};
// @lc code=end
