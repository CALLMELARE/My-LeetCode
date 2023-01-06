/*
 * @lc app=leetcode.cn id=125 lang=cpp
 *
 * [125] 验证回文串
 */

// @lc code=start
class Solution
{
public:
    bool isPalindrome(string s)
    {
        for (char ch : s)
        {
            if (isalnum(ch))
            {
                str += tolower(ch);
            }
        }

        int l = 0, r = str.size() - 1;
        while (l < r)
        {
            if (str[l] != str[r])
                return false;
            l++;
            r--;
        }
        return true;
    }

private:
    string str;
};
// @lc code=end
