/*
 * @lc app=leetcode.cn id=15 lang=cpp
 *
 * [15] 三数之和
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        int n = nums.size();
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for (int a = 0; a < n; a++)
        {
            // skip continues same number
            if (a > 0 && nums[a] == nums[a - 1])
            {
                continue;
            }
            // after c
            int c = n - 1;
            int target = -nums[a];
            for (int b = a + 1; b < n; b++)
            {
                if (b > a + 1 && nums[b] == nums[b - 1])
                {
                    continue;
                }
                while (b < c && nums[b] + nums[c] > target)
                {
                    --c;
                }
                if (b == c)
                {
                    break;
                }
                if (nums[b] + nums[c] == target)
                {
                    ans.push_back({nums[a], nums[b], nums[c]});
                }
            }
        }
        return ans;
    }
};
// @lc code=end
