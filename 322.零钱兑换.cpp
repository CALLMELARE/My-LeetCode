/*
 * @lc app=leetcode.cn id=322 lang=cpp
 *
 * [322] 零钱兑换
 */

// @lc code=start
class Solution
{
public:
    int coinChange(vector<int> &coins, int amount)
    {
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i <= coins.size(); i++)
        {
            for (int j = coins[i - 1]; j <= amount; j++)
            {
                if (dp[j] - 1 > dp[j - coins[i - 1]])
                    dp[j] = 1 + dp[j - coins[i - 1]];
            }
        }
        return dp[amount] == INT_MAX ? -1 : dp[amount];
    }
};
// @lc code=end
