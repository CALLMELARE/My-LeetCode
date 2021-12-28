class Solution
{
public:
    vector<int> sortArrayByParityII(vector<int> &nums)
    {
        int l = nums.size();
        int j = 1;
        for (int i = 0; i < l; i += 2)
        {
            if (nums[i] % 2 == 1)
            {
                while (nums[j] % 2 == 1)
                {
                    j += 2;
                }
                swap(nums[i], nums[j]);
            }
        }
        return nums;
    }
};