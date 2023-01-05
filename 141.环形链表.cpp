/*
 * @lc app=leetcode.cn id=141 lang=cpp
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
    bool hasCycle(ListNode *head)
    {

        if (head == NULL || head->next == NULL)
            return false;
        ListNode *l = head;
        ListNode *r = head->next;
        while (l != r)
        {
            if (r == NULL || r->next == NULL)
                return false;
            l = l->next;
            r = r->next->next;
        }
        return true;
    }
};
// @lc code=end
