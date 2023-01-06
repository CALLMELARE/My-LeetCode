/*
 * @lc app=leetcode.cn id=905 lang=cpp
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
class Solution
{
public:
    vector<int> sortArrayByParity(vector<int> &nums)
    {
        int len = nums.size();
        vector<int> v(len);
        int l = 0, r = len - 1;
        for (int n : nums)
        {
            if (n % 2 == 0)
            {
                v[l++] = n;
            }
            else
            {
                v[r--] = n;
            }
        }
        return v;
    }
};
// @lc code=end
