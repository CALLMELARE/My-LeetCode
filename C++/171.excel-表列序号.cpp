/*
 * @lc app=leetcode.cn id=171 lang=cpp
 *
 * [171] Excel 表列序号
 */

// @lc code=start
class Solution
{
public:
    int titleToNumber(string columnTitle)
    {
        int len = columnTitle.size();
        for (int i = 0; i < len; i++)
            ans = ans * 26 + (columnTitle.at(i) - 'A' + 1);
        return ans;
    }

private:
    int ans = 0;
};
// @lc code=end
