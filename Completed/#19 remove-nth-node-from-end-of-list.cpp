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