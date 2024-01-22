/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const result = Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const product = Number(num1[i]) * Number(num2[j]);
      const sum = product + result[i + j + 1];

      result[i + j + 1] = sum % 10; // 当前位
      result[i + j] += Math.floor(sum / 10); // 进位
    }
  }

  while (result[0] === 0) {
    result.shift(); // 去除结果前导零
  }

  return result.length ? result.join("") : "0";
};
// @lc code=end
