/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currentString = "";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === "[") {
      stack.push(currentString);
      stack.push(num);
      currentString = "";
      num = 0;
    } else if (s[i] === "]") {
      let repeatTimes = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(repeatTimes);
    } else {
      currentString += s[i];
    }
  }

  return currentString;
};
// @lc code=end
