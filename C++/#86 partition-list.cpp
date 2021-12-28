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