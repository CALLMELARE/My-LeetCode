class Solution
{
public:
    string reverseWords(string s)
    {
        int n = s.size();
        int i = 0;
        for (int start = 0; start < n; ++start)
        {
            if (s[start] != ' ')
            {
                if (i != 0)
                    s[i++] = ' ';
                int end = start;
                while (end < n && s[end] != ' ')
                    s[i++] = s[end++];
                reverse(s.begin() + i - (end - start), s.begin() + i);
                start = end;
            }
        }
        s.erase(s.begin() + i, s.end());
        reverse(s.begin(), s.end());
        return s;
    }
};
