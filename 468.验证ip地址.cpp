/*
 * @lc app=leetcode.cn id=468 lang=cpp
 *
 * [468] 验证IP地址
 */

// @lc code=start
class Solution
{
public:
    string validIPAddress(string queryIP)
    {
        regex ipv4("^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)($|(?!\\.$)\\.)){4}$");
        regex ipv6("^(?:(?:[\\da-fA-F]{1,4})($|(?!:$):)){8}$");
        if (regex_search(queryIP, ipv4))
            return "IPv4";
        if (regex_search(queryIP, ipv6))
            return "IPv6";
        return "Neither";
    }
};
// @lc code=end
