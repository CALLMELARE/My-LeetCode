/*
 * @lc app=leetcode.cn id=147 lang=cpp
 *
 * [147] 对链表进行插入排序
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
    ListNode *insertionSortList(ListNode *head)
    {
        if (head == nullptr)
            return head;
        p->next = head;
        ListNode *tmp = head;
        ListNode *current = head->next;
        while (current != nullptr)
        {
            if (tmp->val <= current->val)
                tmp = tmp->next;
            else
            {
                ListNode *prev = p;
                while (prev->next->val <= current->val)
                    prev = prev->next;
                tmp->next = current->next;
                current->next = prev->next;
                prev->next = current;
            }
            current = tmp->next;
        }
        return p->next;
    }

private:
    ListNode *p = new ListNode(0);
};
// @lc code=end
