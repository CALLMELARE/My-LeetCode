class Solution
{
public:
    int findNthDigit(long n)
    {
        for (int i = 1;; i++)
        {
            if (i * pow(10, i) > n)
                return to_string(n / i)[n % i] - '0';
            n += pow(10, i);
        }
    }
};