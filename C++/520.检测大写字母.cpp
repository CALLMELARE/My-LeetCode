/*
 * @lc app=leetcode.cn id=520 lang=cpp
 *
 * [520] 检测大写字母
 */

// @lc code=start
class Solution
{
public:
    bool detectCapitalUse(string word)
    {
        for (int i = 1; i < word.size(); i++)
        {
            if (isupper(word[i]))
            {
                if (islower(word[i - 1]))
                    return false;
                if (i != word.size() - 1 && islower(word[i + 1]))
                    return false;
            }
        }
        return true;
    }
};
// @lc code=end
