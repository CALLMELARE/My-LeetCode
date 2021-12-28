class Solution
{
public:
    int maxArea(vector<int> &heights)
    {
        int res = 0;
        for (int l = 0, r = heights.size() - 1; l < r;)
        {
            if (heights[l] < heights[r])
            {
                res = max(res, (r - l) * heights[l]);
                l++;
            }
            else
            {
                res = max(res, (r - l) * heights[r]);
                r--;
            }
        }
        return res;
    }
};