/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * [2] 两数相加
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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        ListNode *head = new ListNode(0);
        ListNode *ptr = head;
        int carry = 0;
        while (true)
        {
            if (l1 != NULL)
            {
                carry += l1->val;
                l1 = l1->next;
            }
            if (l2 != NULL)
            {
                carry += l2->val;
                l2 = l2->next;
            }
            ptr->val = carry % 10;
            carry /= 10;
            if (l1 != NULL || l2 != NULL || carry != 0)
            {
                ptr = (ptr->next = new ListNode(0));
            }
            else
                break;
        }
        return head;
    }
};
// @lc code=end
