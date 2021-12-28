class Solution
{
public:
    int part(vector<int> &nums, int l, int r)
    {
        int p = nums[r];
        int i = l - 1;
        for (int j = l; j <= r - 1; ++j)
        {
            if (nums[j] <= p)
            {
                i += 1;
                swap(nums[i], nums[j]);
            }
        }
        swap(nums[i + 1], nums[r]);
        return i + 1;
    }
    void quickSort(vector<int> &nums, int l, int r)
    {
        if (l < r)
        {
            int mid = part(nums, l, r);
            quickSort(nums, l, mid - 1);
            quickSort(nums, mid + 1, r);
        }
    }
    vector<int> sortArray(vector<int> &nums)
    {
        srand((unsigned)time(nullptr));
        quickSort(nums, 0, nums.size() - 1);
        return nums;
    }
};