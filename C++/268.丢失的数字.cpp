/*
 * @lc app=leetcode.cn id=268 lang=cpp
 *
 * [268] 丢失的数字
 */

// @lc code=start
class Solution
{
public:
    int missingNumber(vector<int> &nums)
    {
        int len = nums.size();
        int ans = -1;
        for (int i = 0; i < len; i++)
        {
            s.insert(nums[i]);
        }
        for (int i = 0; i <= len; i++)
        {
            if (!s.count(i))
            {
                ans = i;
                break;
            }
        }
        return ans;
    }

private:
    unordered_set<int> s;
};
// @lc code=end
