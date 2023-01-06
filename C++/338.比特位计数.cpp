/*
 * @lc app=leetcode.cn id=338 lang=cpp
 *
 * [338] 比特位计数
 */

// @lc code=start
class Solution
{
public:
    int count(const unsigned int n)
    {
        int sum = 0;
        // max int -> 2^16
        for (int i = 16; i >= 0; i--)
            if (n & (1 << i))
                sum++;
        return sum;
    }
    vector<int> countBits(int n)
    {

        for (int i = 0; i <= n; i++)
        {
            ans.push_back(count(i));
        }
        return ans;
    }

private:
    vector<int> ans;
};
// @lc code=end
