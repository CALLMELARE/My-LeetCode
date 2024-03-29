/*
 * @lc app=leetcode.cn id=374 lang=cpp
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution
{
public:
    int guessNumber(int n)
    {
        int l = 1, r = n;
        while (l < r)
        {
            int mid = l + (r - l) / 2;
            if (guess(mid) <= 0)
                r = mid;
            else
                l = mid + 1;
        }
        return l;
    }
};
// @lc code=end
