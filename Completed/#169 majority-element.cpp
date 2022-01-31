class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {
        unordered_map<int, int> count;
        int majority = 0, cnt = 0;
        for (int num : nums)
        {
            ++count[num];
            if (count[num] > cnt)
            {
                majority = num;
                cnt = count[num];
            }
        }
        return majority;
    }
};