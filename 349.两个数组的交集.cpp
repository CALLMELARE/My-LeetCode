/*
 * @lc app=leetcode.cn id=349 lang=cpp
 *
 * [349] 两个数组的交集
 */

// @lc code=start
class Solution
{
public:
    void pair(unordered_set<int> &s1, unordered_set<int> &s2)
    {
        if (s1.size() > s2.size())
        {
            return pair(s2, s1);
        }
        for (auto i : s1)
        {
            if (s2.count(i))
            {
                ans.push_back(i);
            }
        }
    }
    vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
    {
        for (int n : nums1)
        {
            s1.insert(n);
        }
        for (int n : nums2)
        {
            s2.insert(n);
        }
        pair(s1, s2);
        return ans;
    }

private:
    unordered_set<int> s1, s2;
    vector<int> ans;
};
// @lc code=end
