class Solution
{
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        unordered_set<ListNode *> set;
        ListNode *p = headA;
        while (p != NULL)
        {
            set.insert(p);
            p = p->next;
        }
        p = headB;
        while (p != NULL)
        {
            if (set.count(p))
                return p;
            else
                p = p->next;
        }
        return NULL;
    }
};