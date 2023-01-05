/*
 * @lc app=leetcode.cn id=11 lang=cpp
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int res = 0;
        for (int l = 0, r = height.size() - 1; l < r;)
        {
            if (height[l] < height[r])
            {
                res = max(res, (r - l) * height[l]);
                l++;
            }
            else
            {
                res = max(res, (r - l) * height[r]);
                r--;
            }
        }
        return res;
    }
};
// @lc code=end
