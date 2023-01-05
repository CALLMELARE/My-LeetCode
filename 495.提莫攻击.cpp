/*
 * @lc app=leetcode.cn id=495 lang=cpp
 *
 * [495] 提莫攻击
 */

// @lc code=start
class Solution
{
public:
    int findPoisonedDuration(vector<int> &timeSeries, int duration)
    {
        int len = timeSeries.size();
        // expired time
        int expired = 0;

        for (int i = 0; i < len; i++)
        {
            if (timeSeries[i] >= expired)
            {
                totalCount += duration;
            }
            else
            {
                totalCount += timeSeries[i] + duration - expired;
            }
            expired = timeSeries[i] + duration;
        }
        return totalCount;
    }

private:
    int totalCount = 0;
};
// @lc code=end
