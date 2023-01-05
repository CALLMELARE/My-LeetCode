/*
 * @lc app=leetcode.cn id=22 lang=cpp
 *
 * [22] 括号生成
 */

// @lc code=start
class Solution
{
public:
    void DFS(int n, int countLeft, int countRight, string str)
    {
        if (countLeft == n && countRight == n)
            ans.push_back(str);
        if (countLeft < n)
            DFS(n, countLeft + 1, countRight, str + "(");
        if (countRight < n && countLeft > countRight)
            DFS(n, countLeft, countRight + 1, str + ")");
    }
    vector<string> generateParenthesis(int n)
    {
        DFS(n, 0, 0, "");
        return ans;
    }

private:
    vector<string> ans;
};
// @lc code=end
