/*
 * @lc app=leetcode.cn id=16 lang=cpp
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
class Solution
{
public:
    int threeSumClosest(vector<int> &nums, int target)
    {
        int ans = 1e9;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++)
        {
            if (i > 0 && nums[i - 1] == nums[i])
                continue;
            int j = i + 1, k = nums.size() - 1;
            while (j < k)
            {
                int current = nums[i] + nums[j] + nums[k];
                if (current == target)
                    return target;
                if (abs(current - target) < abs(ans - target))
                    ans = current;
                if (current > target)
                {
                    int tmp = k;
                    while (tmp > j && nums[tmp] == nums[tmp - 1])
                        tmp--;
                    k = tmp - 1;
                }
                else
                {
                    int tmp = j;
                    while (tmp < k && nums[tmp] == nums[tmp + 1])
                        tmp++;
                    j = tmp + 1;
                }
            }
        }
        return ans;
    }
};
// @lc code=end
