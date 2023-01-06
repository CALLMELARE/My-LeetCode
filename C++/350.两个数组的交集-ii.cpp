/*
 * @lc app=leetcode.cn id=350 lang=cpp
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
class Solution
{
public:
    vector<int> intersect(vector<int> &nums1, vector<int> &nums2)
    {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        vector<int> result;
        int i = 0, j = 0, k = 0;
        while (i < nums1.size() && j < nums2.size())
        {
            if (nums1[i] == nums2[j])
            {
                result.push_back(nums1[i]);
                i++;
                j++;
                k++;
            }
            else
            {
                nums1[i] < nums2[j] ? i++ : j++;
            }
        }
        return result;
    }
};
// @lc code=end
