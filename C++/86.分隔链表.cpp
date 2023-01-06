/*
 * @lc app=leetcode.cn id=86 lang=cpp
 *
 * [86] 分隔链表
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
    ListNode *partition(ListNode *head, int x)
    {
        ListNode *alpha = new ListNode(0);
        ListNode *alphaHead = alpha;
        ListNode *beta = new ListNode(0);
        ListNode *betaHead = beta;
        while (head != nullptr)
        {
            if (head->val < x)
            {
                alpha->next = head;
                alpha = alpha->next;
            }
            else
            {
                beta->next = head;
                beta = beta->next;
            }
            head = head->next;
        }
        beta->next = nullptr;
        alpha->next = betaHead->next;
        return alphaHead->next;
    }
};
// @lc code=end
