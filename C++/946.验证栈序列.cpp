/*
 * @lc app=leetcode.cn id=946 lang=cpp
 *
 * [946] 验证栈序列
 */

// @lc code=start
class Solution
{
public:
    bool validateStackSequences(vector<int> &pushed, vector<int> &popped)
    {
        int len = popped.size();
        stack<int> s;
        int index = 0;
        for (int i = 0; i < pushed.size(); i++)
        {
            s.push(pushed[i]);
            while (!s.empty() && index < len && s.top() == popped[index])
            {
                s.pop();
                index++;
            }
        }
        return index == len;
    }
};
// @lc code=end
