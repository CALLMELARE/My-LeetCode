class Solution
{
public:
    long remain(int x, int a, int p)
    {
        long rem = 1;
        for (int i = 0; i < a; i++)
        {
            rem = (rem * x) % p;
        }
        return rem;
    }
    int integerBreak(int n)
    {
        if (n <= 3)
        {
            return n - 1;
        }
        int b = n % 3, p = 1000000007;
        long rem = 1, x = 3, a = n / 3;
        for (int i = 0; i < ((b == 1) ? a - 1 : a); i++)
        {
            rem = (rem * x) % p;
        }
        if (b == 0)
            return (int)(rem % p);
        if (b == 1)
            return (int)(rem * 4 % p);
        return (int)(rem * 2 % p);
    }
};