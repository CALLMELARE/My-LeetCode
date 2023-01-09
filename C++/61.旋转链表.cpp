/*
 * @lc app=leetcode.cn id=61 lang=cpp
 *
 * [61] 旋转链表
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
    ListNode *rotateRight(ListNode *head, int k)
    {

        if (k == 0 || head == nullptr || head->next == nullptr)
            return head;

        ListNode *p = head;
        while (p->next != nullptr)
        {
            p = p->next;
            len++;
        }
        int dist = len - k % len;
        if (dist == len)
            return head;
        p->next = head;
        while (dist--)
            p = p->next;
        ListNode *q = p->next;
        p->next = nullptr;
        return q;
    }

private:
    int len = 1;
};
// @lc code=end
