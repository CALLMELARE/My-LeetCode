class Solution
{
public:
    string convert(string s, int numRows)
    {
        int len = s.length();
        vector<string> sb(numRows, "");
        int i = 0;
        while (i < len)
        {
            for (int idx = 0; idx < numRows && i < len; idx++)
            {
                // vertically down
                char c[5];
                c[0] = s[i++], c[1] = '\0';
                sb[idx] = sb[idx] + string(c);
            }
            for (int idx = numRows - 2; idx >= 1 && i < len; idx--)
            {
                // obliquely up
                char c[5];
                c[0] = s[i++], c[1] = '\0';
                sb[idx] = sb[idx] + string(c);
            }
        }
        for (int idx = 1; idx < sb.size(); idx++)
        {
            sb[0] = sb[0] + sb[idx];
        }
        return sb[0];
    }
};