/*
 * @lc app=leetcode.cn id=228 lang=cpp
 *
 * [228] 汇总区间
 */

// @lc code=start
class Solution
{
public:
    vector<string> summaryRanges(vector<int> &nums)
    {
        int len = nums.size();
        int p = 0;
        while (p < len)
        {
            int l = p;
            p++;
            while (p < len && nums[p] == nums[p - 1] + 1)
            {
                p++;
            }
            int r = p - 1;
            if (l < r)
            {
                ans.push_back(to_string(nums[l]) + "->" + to_string(nums[r]));
            }
            else
            {
                ans.push_back(to_string(nums[l]));
            }
        }
        return ans;
    }

private:
    vector<string> ans;
};
// @lc code=end
