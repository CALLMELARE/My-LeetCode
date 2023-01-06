/*
 * @lc app=leetcode.cn id=2469 lang=cpp
 *
 * [2469] 温度转换
 */

// @lc code=start
class Solution
{
public:
    vector<double> convertTemperature(double celsius)
    {
        return vector<double>{(celsius * 100 + 27315) / 100, (celsius * 180 + 3200) / 100};
    }
};
// @lc code=end
