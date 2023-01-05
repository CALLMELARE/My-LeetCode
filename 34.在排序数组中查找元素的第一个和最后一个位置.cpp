/*
 * @lc app=leetcode.cn id=34 lang=cpp
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
class Solution
{
public:
    vector<int> searchRange(vector<int> &nums, int target)
    {
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] == target)
            {
                ans.push_back(i);
                break;
            }
        }
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            if (nums[i] == target)
            {
                ans.push_back(i);
                break;
            }
        }
        if (!ans.size())
        {
            ans.push_back(-1);
            ans.push_back(-1);
        }
        return ans;
    }

private:
    vector<int> ans;
};
// @lc code=end
