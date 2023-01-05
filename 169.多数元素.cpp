/*
 * @lc app=leetcode.cn id=169 lang=cpp
 *
 * [169] 多数元素
 */

// @lc code=start
class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {

        int majority = 0, cnt = 0;
        for (int num : nums)
        {
            ++count[num];
            if (count[num] > cnt)
            {
                majority = num;
                cnt = count[num];
            }
        }
        return majority;
    }

private:
    unordered_map<int, int> count;
};
// @lc code=end
