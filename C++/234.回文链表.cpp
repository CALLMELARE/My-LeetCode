/*
 * @lc app=leetcode.cn id=234 lang=cpp
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    bool isPalindrome(ListNode *head)
    {
        vector<int> l;
        while (head)
        {
            l.push_back(head->val);
            head = head->next;
        }
        int i = 0, j = l.size() - 1;
        while (i <= j)
        {
            if (l[i] != l[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
};
// @lc code=end
