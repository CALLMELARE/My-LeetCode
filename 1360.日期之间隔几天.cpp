/*
 * @lc app=leetcode.cn id=1360 lang=cpp
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
class Solution
{
public:
    int leap(int y)
    {
        return (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0));
    }
    int unix(string date)
    {
        int y, m, d, ans = 0;
        sscanf(date.c_str(), "%d-%d-%d", &y, &m, &d);
        while (y != 1971 || m != 1 || d != 1)
        {
            ans++;
            if (--d == 0)
                if (--m == 0)
                    y--;
            if (d == 0)
            {
                d = months[m];
                if (m == 2 && leap(y))
                    d++;
                if (m == 0)
                    m = 12;
            }
        }
        return ans;
    }

    int daysBetweenDates(string date1, string date2)
    {
        return abs(unix(date1) - unix(date2));
    }

private:
    vector<int> months = {31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30};
};
// @lc code=end
