/*
 * @lc app=leetcode.cn id=165 lang=cpp
 *
 * [165] 比较版本号
 */

// @lc code=start
class Solution
{
public:
    int compareVersion(string version1, string version2)
    {
        int len1 = version1.size(), len2 = version2.size();
        while (i < len1 || j < len2)
        {
            int x = 0, y = 0;
            while (i < len1 && version1[i] != '.')
            {
                x = x * 10 - '0' + version1[i];
                i++;
            }
            i++;
            while (j < len2 && version2[j] != '.')
            {
                y = y * 10 - '0' + version2[j];
                j++;
            }
            j++;
            if (x > y)
                return 1;
            if (x < y)
                return -1;
        }
        return 0;
    }

private:
    int i = 0, j = 0;
};
// @lc code=end
