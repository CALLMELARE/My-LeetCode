/*
 * @lc app=leetcode.cn id=989 lang=cpp
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
class Solution
{
public:
    vector<int> addToArrayForm(vector<int> &num, int k)
    {
        int len = num.size();
        for (int i = len - 1; i >= 0; i--)
        {
            int sum = num[i] + k % 10;
            k /= 10;
            // 进位
            if (sum >= 10)
            {
                k++;
                sum -= 10;
            }
            ans.push_back(sum);
        }
        while (k > 0)
        {
            ans.push_back(k % 10);
            k /= 10;
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }

private:
    vector<int> ans;
};
// @lc code=end
