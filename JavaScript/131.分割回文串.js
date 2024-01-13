/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  function backtrack(start, temp) {
    if (start === s.length) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const substring = s.slice(start, i + 1);

      if (isPalindrome(substring)) {
        temp.push(substring);
        backtrack(i + 1, temp);
        temp.pop();
      }
    }
  }

  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  backtrack(0, []);
  return result;
};
// @lc code=end
