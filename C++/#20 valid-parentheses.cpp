class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> match;
        for (int i = 0; i < s.size(); ++i)
        {
            if (!match.empty() && ((s[i] == ')' && match.top() == '(') || (s[i] == '}' && match.top() == '{') || (s[i] == ']' && match.top() == '[')))
            {
                match.pop();
            }
            else
            {
                match.push(s[i]);
            }
        }
        return match.size() ? false : true;
    }
};