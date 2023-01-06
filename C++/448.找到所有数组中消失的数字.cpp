/*
 * @lc app=leetcode.cn id=448 lang=cpp
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
class Solution
{
public:
    vector<int> findDisappearedNumbers(vector<int> &nums)
    {

        for (int i = 0; i < nums.size(); i++)
            set.insert(nums[i]);
        for (int i = 1; i <= nums.size(); i++)
        {
            if (!set.count(i))
                ans.push_back(i);
        }
        return ans;
    }

private:
    unordered_set<int> set;
    vector<int> ans;
};
// @lc code=end
