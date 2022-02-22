class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int len = nums.size();
        int i = 0, j = 0;
        while (j < len)
        {
            if (nums[j])
            {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
            j++;
        }
    }
};