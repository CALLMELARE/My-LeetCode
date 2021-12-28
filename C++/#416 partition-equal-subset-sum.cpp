class Solution
{
public:
    bool canPartition(vector<int> &nums)
    {
        int sum = 0, n = nums.size();
        for (int num : nums)
            sum += num;
        if (sum % 2 != 0)
            return false;
        int c = sum / 2;
        vector<bool> dp(c + 1, false);
        dp[0] = true;
        for (int i = 1; i <= n; i++)
        {
            for (int j = c; j >= nums[i - 1]; j--)
            {
                dp[j] = dp[j] || dp[j - nums[i - 1]];
            }
        }
        return dp[c];
    }
};