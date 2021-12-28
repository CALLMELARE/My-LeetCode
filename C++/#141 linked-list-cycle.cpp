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