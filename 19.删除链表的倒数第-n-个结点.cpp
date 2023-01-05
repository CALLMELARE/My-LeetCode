/*
 * @lc app=leetcode.cn id=19 lang=cpp
 *
 * [19] 删除链表的倒数第 N 个结点
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
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        ListNode *l = head, *r = head;
        int count = 0;
        while (count < n)
        {
            if (r->next)
            {
                r = r->next;
                count++;
            }
            else
            {
                head = head->next;
                return head;
            }
        }
        while (r->next)
        {
            l = l->next;
            r = r->next;
        }
        ListNode *temp = l->next;
        l->next = l->next->next;
        return head;
    }
};
// @lc code=end
