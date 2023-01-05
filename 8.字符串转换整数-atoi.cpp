/*
 * @lc app=leetcode.cn id=8 lang=cpp
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
class Solution
{
public:
    int myAtoi(string s)
    {
        if (s.empty())
            return 0;
        int sign = 1, base = 0, i = 0, n = s.size();
        while (i < n && s[i] == ' ')
            ++i;
        if (i < n && (s[i] == '+' || s[i] == '-'))
        {
            sign = (s[i++] == '+') ? 1 : -1;
        }
        while (i < n && s[i] >= '0' && s[i] <= '9')
        {
            if (base > INT_MAX / 10 || (base == INT_MAX / 10 && s[i] - '0' > 7))
            {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            base = 10 * base + (s[i++] - '0');
        }
        return base * sign;
    }
};
// @lc code=end
