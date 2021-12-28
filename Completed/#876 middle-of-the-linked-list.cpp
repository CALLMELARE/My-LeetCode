class Solution
{
public:
    ListNode *middleNode(ListNode *head)
    {
        int n = 0, k = 0;
        ListNode *current = head;
        // count
        while (current != NULL)
        {
            ++n;
            current = current->next;
        }
        current = head;
        while (k < n / 2)
        {
            ++k;
            current = current->next;
        }
        return current;
    }
};