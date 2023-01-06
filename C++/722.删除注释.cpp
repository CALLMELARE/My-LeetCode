/*
 * @lc app=leetcode.cn id=722 lang=cpp
 *
 * [722] 删除注释
 */

// @lc code=start
class Solution
{
public:
    vector<string> removeComments(vector<string> &source)
    {
        for (auto &s : source)
        {
            int i = 0, len = s.size();
            if (!inBlock)
                tmp.clear();
            while (i < len)
            {
                if (!inBlock && i < len - 1 && s[i] == '/' && s[i + 1] == '*')
                {
                    inBlock = true;
                    i++;
                }
                else if (inBlock && i < len - 1 && s[i] == '*' && s[i + 1] == '/')
                {
                    inBlock = false;
                    i++;
                }
                else if (!inBlock && i < len - 1 && s[i] == '/' && s[i + 1] == '/')
                    break;
                else if (!inBlock)
                    tmp += s[i];
                i++;
            }
            if (!inBlock && !tmp.empty())
                ans.emplace_back(tmp);
        }
        return ans;
    }

private:
    bool inBlock = false;
    vector<string> ans;
    string tmp;
};
// @lc code=end
