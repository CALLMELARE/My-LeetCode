/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 */

// @lc code=start
class Solution
{
public:
    int fib(int n)
    {
        if (n < 2)
            return n;
        int p = 0, q = 0;
        for (int i = 2; i <= n; i++)
        {
            p = q;
            q = result;
            result = p + q;
        }
        return result;
    }

private:
    int result = 1;
};
// @lc code=end
