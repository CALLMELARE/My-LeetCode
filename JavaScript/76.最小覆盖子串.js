/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = new Map(); // 使用 Map 存储 t 中每个字符的出现次数
  let window = new Map(); // 使用 Map 存储当前窗口中每个字符的出现次数

  // 初始化 need
  for (let char of t) {
    need.set(char, need.get(char) + 1 || 1);
  }

  let left = 0; // 滑动窗口的左指针
  let right = 0; // 滑动窗口的右指针
  let count = 0; // 当前窗口中满足要求的字符数量
  let minLength = Infinity; // 最小子串的长度
  let start = 0; // 最小子串的起始位置

  while (right < s.length) {
    let char = s[right];
    if (need.has(char)) {
      window.set(char, window.get(char) + 1 || 1);
      if (window.get(char) === need.get(char)) {
        count++;
      }
    }
    right++;

    while (count === need.size) {
      if (right - left < minLength) {
        minLength = right - left;
        start = left;
      }
      let leftChar = s[left];
      if (need.has(leftChar)) {
        window.set(leftChar, window.get(leftChar) - 1);
        if (window.get(leftChar) < need.get(leftChar)) {
          count--;
        }
      }
      left++;
    }
  }

  if (minLength === Infinity) {
    return "";
  } else {
    return s.substr(start, minLength);
  }
};
// @lc code=end
