class Solution
{
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        stack<int> stack1, stack2;
        // push
        while (l1)
        {
            stack1.push(l1->val);
            l1 = l1->next;
        }
        while (l2)
        {
            stack2.push(l2->val);
            l2 = l2->next;
        }
        int c = 0;
        ListNode *ans = NULL;
        while (!stack1.empty() || !stack2.empty() || c != 0)
        {
            int a = stack1.empty() ? 0 : stack1.top();
            int b = stack2.empty() ? 0 : stack2.top();
            if (!stack1.empty())
                stack1.pop();
            if (!stack2.empty())
                stack2.pop();
            int current = a + b + c;
            c = current / 10;
            current %= 10;
            ListNode *curcode = new ListNode(current);
            curcode->next = ans;
            ans = curcode;
        }
        return ans;
    }
};