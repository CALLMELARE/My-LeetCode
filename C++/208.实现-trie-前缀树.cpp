/*
 * @lc app=leetcode.cn id=208 lang=cpp
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie
{
public:
    Trie()
    {
        isEnd = false;
        memset(children, 0, sizeof(children));
    }

    void insert(string word)
    {
        Trie *p = this;
        for (auto c : word)
        {
            if (p->children[c - 'a'] == nullptr)
                p->children[c - 'a'] = new Trie();
            p = p->children[c - 'a'];
        }
        p->isEnd = true;
    }

    bool search(string word)
    {
        Trie *p = this;
        for (auto c : word)
        {
            p = p->children[c - 'a'];
            if (p == nullptr)
                return false;
        }
        return p->isEnd;
    }

    bool startsWith(string prefix)
    {
        Trie *p = this;
        for (auto c : prefix)
        {
            p = p->children[c - 'a'];
            if (p == nullptr)
                return false;
        }
        return true;
    }

private:
    bool isEnd;
    Trie *children[26];
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
// @lc code=end
