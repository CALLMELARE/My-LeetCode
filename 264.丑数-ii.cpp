/*
 * @lc app=leetcode.cn id=264 lang=cpp
 *
 * [264] 丑数 II
 */

// @lc code=start
class Solution
{
public:
    int nthUglyNumber(int n)
    {

        double ans = 1;
        for (int i = 1; i < n; i++)
        {
            s.insert(ans * 2);
            s.insert(ans * 3);
            s.insert(ans * 5);
            ans = *s.begin();
            s.erase(ans);
        }
        return ans;
    }

private:
    set<double> s;
};
// @lc code=end
