/*
 * @lc app=leetcode.cn id=557 lang=cpp
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
class Solution
{
public:
    string reverseWords(string s)
    {
        int len = s.length();
        int i = 0;
        while (i < len)
        {
            int start = i;
            // find a word
            while (i < len && s[i] != ' ')
            {
                i++;
            }
            // define the position of the word
            int left = start, right = i - 1;
            // reverse the word letter by letter
            while (left < right)
            {
                swap(s[left], s[right]);
                left++;
                right--;
            }
            // skip all space
            while (i < len && s[i] == ' ')
            {
                i++;
            }
        }
        // return answer
        return s;
    }
};
// @lc code=end
