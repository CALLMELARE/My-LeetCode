/*
 * @lc app=leetcode.cn id=1507 lang=cpp
 *
 * [1507] 转变日期格式
 */

// @lc code=start
class Solution
{
public:
    string reformatDate(string date)
    {
        stringstream ss(date);
        string year, month, day;
        ss >> day >> month >> year;
        month = monthMap[month];
        day = day.substr(0, day.size() == 3 ? 1 : 2);
        if (day.size() == 1)
            day = "0" + day;
        return year + "-" + month + "-" + day;
    }

private:
    unordered_map<string, string> monthMap = {
        {"Jan", "01"},
        {"Feb", "02"},
        {"Mar", "03"},
        {"Apr", "04"},
        {"May", "05"},
        {"Jun", "06"},
        {"Jul", "07"},
        {"Aug", "08"},
        {"Sep", "09"},
        {"Oct", "10"},
        {"Nov", "11"},
        {"Dec", "12"}};
};
// @lc code=end
