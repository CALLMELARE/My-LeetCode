/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  const combinations = [];
  backtrack(digits, 0, "", combinations);
  return combinations;
};

function backtrack(digits, index, currentCombination, combinations) {
  if (index === digits.length) {
    combinations.push(currentCombination);
    return;
  }
  const letters = phoneMap[digits[index]];
  for (const letter of letters) {
    backtrack(digits, index + 1, currentCombination + letter, combinations);
  }
}

const phoneMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

// @lc code=end
