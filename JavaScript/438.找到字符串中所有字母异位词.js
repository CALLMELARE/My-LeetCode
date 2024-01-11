/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  if (s.length < p.length) return result;

  const pFreq = new Array(26).fill(0); // p 中每个字符的出现次数
  const windowFreq = new Array(26).fill(0); // 滑动窗口中每个字符的出现次数
  let matchCount = 0; // 匹配的字符数

  // 统计 p 中每个字符的出现次数
  for (let i = 0; i < p.length; i++) {
    pFreq[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    windowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // 检查第一个滑动窗口是否是 p 的异位词
  if (isAnagram(windowFreq, pFreq)) {
    result.push(0);
  }

  // 移动滑动窗口
  for (let i = p.length; i < s.length; i++) {
    windowFreq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    windowFreq[s.charCodeAt(i - p.length) - "a".charCodeAt(0)]--;

    // 检查当前滑动窗口是否是 p 的异位词
    if (isAnagram(windowFreq, pFreq)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

function isAnagram(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
