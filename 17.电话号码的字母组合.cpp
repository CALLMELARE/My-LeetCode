/*
 * @lc app=leetcode.cn id=17 lang=cpp
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
class Solution
{
public:
    void letterCombinationsDFS(string &digits, vector<string> &dict, int level, string out, vector<string> &res)
    {
        if (level == digits.size())
        {
            res.push_back(out);
            return;
        }
        string str = dict[digits[level] - '0'];
        for (int i = 0; i < str.size(); ++i)
        {
            letterCombinationsDFS(digits, dict, level + 1, out + str[i], res);
        }
    }
    vector<string> letterCombinations(string digits)
    {
        if (digits.empty())
            return {};
        vector<string> res;
        vector<string> dict{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        letterCombinationsDFS(digits, dict, 0, "", res);
        return res;
    }
};
// @lc code=end
