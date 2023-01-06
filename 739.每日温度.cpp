/*
 * @lc app=leetcode.cn id=739 lang=cpp
 *
 * [739] 每日温度
 */

// @lc code=start
class Solution
{
public:
    vector<int> dailyTemperatures(vector<int> &temperatures)
    {
        // 单调栈
        int len = temperatures.size();
        vector<int> ans(len);
        for (int i = 0; i < len; i++)
        {
            while (!s.empty() && temperatures[i] > temperatures[s.top()])
            {
                int prev = s.top();
                ans[prev] = i - prev;
                s.pop();
            }
            s.push(i);
        }
        return ans;
    }

private:
    stack<int> s;
};
// @lc code=end
