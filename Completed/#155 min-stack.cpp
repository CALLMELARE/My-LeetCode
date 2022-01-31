class MinStack
{
public:
    /** initialize your data structure here. */
    MinStack()
    {
        t = -1;
        size = 0;
    }

    void push(int val)
    {
        stack[++t] = val;
        size++;
    }

    void pop()
    {
        stack[t--];
        size--;
    }

    int top()
    {
        return stack[t];
    }

    int getMin()
    {
        int temp = stack[0];
        for (int i = 0; i < size; i++)
        {
            temp = min(temp, stack[i]);
        }
        return temp;
    }

private:
    int stack[10000] = {0};
    int t;
    int size;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */