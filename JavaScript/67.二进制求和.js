/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0; // 进位标志
  let result = ""; // 结果字符串

  // 从后往前遍历两个二进制字符串
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    // 取出当前位置的数字，若已遍历完则视为0
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
    i--;
    j--;
  }

  return result;
};
// @lc code=end
