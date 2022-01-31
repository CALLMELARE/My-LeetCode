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