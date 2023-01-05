/*
 * @lc app=leetcode.cn id=400 lang=cpp
 *
 * [400] 第 N 位数字
 */

// @lc code=start
class Solution
{
public:
    int findNthDigit(int n)
    {
        for (int i = 1;; i++)
        {
            if (i * pow(10, i) > n)
                return to_string(n / i)[n % i] - '0';
            n += pow(10, i);
        }
    }
};
// @lc code=end
