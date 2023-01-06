/*
 * @lc app=leetcode.cn id=704 lang=cpp
 *
 * [704] 二分查找
 */

// @lc code=start
class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int l = 0, r = nums.size() - 1;
        while (l <= r)
        {
            int mid = l + (r - l) / 2;
            int n = nums[mid];
            if (n == target)
                return mid;
            else if (n > target)
                r = mid - 1;
            else
                l = mid + 1;
        }
        return -1;
    }
};
// @lc code=end
