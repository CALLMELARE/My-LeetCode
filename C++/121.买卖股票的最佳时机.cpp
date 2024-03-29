/*
 * @lc app=leetcode.cn id=121 lang=cpp
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        if (!prices.size())
            return 0;
        int result = 0, fx = 0;
        for (int i = 1; i < prices.size(); i++)
        {
            fx = max(fx + prices[i] - prices[i - 1], 0);
            result = max(result, fx);
        }
        return result;
    }
};
// @lc code=end
