/*
 * @lc app=leetcode.cn id=551 lang=cpp
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
class Solution
{
public:
    bool checkRecord(string s)
    {
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == 'A')
                countA++;
            if (s[i] != 'L')
                countL = 0;
            else
                countL++;
            if (countL >= 3)
                return false;
        }
        if (countA >= 2)
            return false;
        return true;
    }

private:
    int countA = 0, countL = 0;
};
// @lc code=end
