/*
 * @lc app=leetcode.cn id=811 lang=cpp
 *
 * [811] 子域名访问计数
 */

// @lc code=start
class Solution
{
public:
    vector<string> subdomainVisits(vector<string> &cpdomains)
    {
        for (auto &&domain : cpdomains)
        {
            int spaceIndex = domain.find(' ');
            int count = stoi(domain.substr(0, spaceIndex));
            string str = domain.substr(spaceIndex + 1);
            counts[str] += count;
            for (int i = 0; i < str.size(); i++)
            {
                if (str[i] == '.')
                {
                    counts[str.substr(i + 1)] += count;
                }
            }
        }
        for (auto &&[sub, count] : counts)
            ans.emplace_back(to_string(count) + " " + sub);
        return ans;
    }

private:
    vector<string> ans;
    unordered_map<string, int> counts;
};
// @lc code=end
