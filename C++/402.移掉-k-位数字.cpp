/*
 * @lc app=leetcode.cn id=402 lang=cpp
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
class Solution
{
public:
    string removeKdigits(string num, int k)
    {
        // 靠前的数字尽可能小
        for (auto &c : num)
        {
            while (s.size() > 0 && s.back() > c && k)
            {
                s.pop_back();
                k--;
            }
            s.push_back(c);
        }

        // 依次移除
        while (k > 0)
        {
            s.pop_back();
            k--;
        }

        bool flag = true;
        for (auto &c : s)
        {
            if (flag && c == '0')
                continue;
            flag = false;
            str += c;
        }
        return str != "" ? str : "0";
    }

private:
    vector<char> s;
    string str = "";
};
// @lc code=end
