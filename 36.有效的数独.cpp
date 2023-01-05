/*
 * @lc app=leetcode.cn id=36 lang=cpp
 *
 * [36] 有效的数独
 */

// @lc code=start
class Solution
{
public:
    bool isValidSudoku(vector<vector<char>> &board)
    {
        bool row[9][10] = {0}, col[9][10] = {0}, rect[9][10] = {0};
        for (int i = 0; i < 9; i++)
        {
            for (int j = 0; j < 9; j++)
            {
                if (board[i][j] == '.')
                    continue;
                int curNumber = board[i][j] - '0';
                if (row[i][curNumber])
                    return false;
                if (col[j][curNumber])
                    return false;
                if (rect[j / 3 + (i / 3) * 3][curNumber])
                    return false;
                row[i][curNumber] = true;
                col[j][curNumber] = true;
                rect[j / 3 + (i / 3) * 3][curNumber] = true;
            }
        }
        return true;
    }
};
// @lc code=end
