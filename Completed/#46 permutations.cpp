class Solution
{
public:
    void trackBack(vector<vector<int>> &res, vector<int> &output, int first, int len)
    {
        if (first == len)
        {
            res.emplace_back(output);
            return;
        }
        for (int i = first; i < len; ++i)
        {
            swap(output[i], output[first]);
            trackBack(res, output, first + 1, len);
            swap(output[i], output[first]);
        }
    }
    vector<vector<int>> permute(vector<int> &nums)
    {
        vector<vector<int>> res;
        trackBack(res, nums, 0, (int)nums.size());
        return res;
    }
};