/*
 * @lc app=leetcode.cn id=347 lang=cpp
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class Solution
{
public:
    static bool cmp(pair<int, int> &m, pair<int, int> &n)
    {
        return m.second > n.second;
    }
    vector<int> topKFrequent(vector<int> &nums, int k)
    {

        for (auto &v : nums)
        {
            occurrences[v]++;
        }
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(&cmp)> q(cmp);
        for (auto &[num, count] : occurrences)
        {
            if (q.size() == k)
            {
                if (q.top().second < count)
                {
                    q.pop();
                    q.emplace(num, count);
                }
            }
            else
            {
                q.emplace(num, count);
            }
        }
        vector<int> ret;
        while (!q.empty())
        {
            ret.emplace_back(q.top().first);
            q.pop();
        }
        return ret;
    }

private:
    unordered_map<int, int> occurrences; // frequency
};
// @lc code=end
