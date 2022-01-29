class Solution
{
public:
    vector<int> searchRange(vector<int> &nums, int target)
    {
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] == target)
            {
                ans.push_back(i);
                break;
            }
        }
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            if (nums[i] == target)
            {
                ans.push_back(i);
                break;
            }
        }
        if (!ans.size())
        {
            ans.push_back(-1);
            ans.push_back(-1);
        }
        return ans;
    }

private:
    vector<int> ans;
};