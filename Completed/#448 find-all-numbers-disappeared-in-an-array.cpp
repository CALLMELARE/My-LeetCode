class Solution
{
public:
    vector<int> findDisappearedNumbers(vector<int> &nums)
    {
        unordered_set<int> set;
        vector<int> ans;
        for (int i = 0; i < nums.size(); i++)
            set.insert(nums[i]);
        for (int i = 1; i <= nums.size(); i++)
        {
            if (!set.count(i))
                ans.push_back(i);
        }
        return ans;
    }
};