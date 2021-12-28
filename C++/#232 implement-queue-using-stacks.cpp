class MyQueue
{
public:
    stack<int> s1;
    stack<int> s2;
    // Initialize data structure
    MyQueue()
    {
    }

    void merge()
    {
        while (!s1.empty())
        {
            s2.push(s1.top());
            s1.pop();
        }
    }

    // push
    void push(int x)
    {
        s1.push(x);
    }

    // pop
    int pop()
    {
        if (s2.empty())
        {
            merge();
        }
        int temp = s2.top();
        s2.pop();
        return temp;
    }

    // top
    int peek()
    {
        if (s2.empty())
        {
            merge();
        }
        return s2.top();
    }

    // empty
    bool empty()
    {
        return s1.empty() && s2.empty();
    }
};