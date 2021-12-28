class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        int count1[26] = {0}, count2[26] = {0};
        for (char c : ransomNote)
        {
            count1[c - 'a']++;
        }
        for (char c : magazine)
        {
            count2[c - 'a']++;
        }
        for (int i = 0; i < 26; i++)
        {
            if (count1[i] > count2[i])
            {
                return false;
            }
        }
        return true;
    }
};