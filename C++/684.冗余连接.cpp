/*
 * @lc app=leetcode.cn id=684 lang=cpp
 *
 * [684] 冗余连接
 */

// @lc code=start
class Solution
{
public:
    vector<int> findRedundantConnection(vector<vector<int>> &edges)
    {
        int len = edges.size();
        parent.resize(len + 1);
        for (int i = 1; i <= len; i++)
            parent[i] = i;
        for (auto &edge : edges)
        {
            int e1 = edge[0], e2 = edge[1];
            if (find(parent, e1) != find(parent, e2))
                uni(parent, e1, e2);
            else
                return edge;
        }
        return vector<int>{};
    }

private:
    vector<int> parent;
    int find(vector<int> &parent, int i)
    {
        if (parent[i] != i)
            parent[i] = find(parent, parent[i]);
        return parent[i];
    }
    void uni(vector<int> &parent, int i, int j)
    {
        parent[find(parent, i)] = find(parent, j);
    }
};
// @lc code=end
