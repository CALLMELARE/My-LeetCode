/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (const pay of bills) {
    if (pay === 5) five += 1;
    if (pay === 10) {
      if (five < 1) return false;
      five -= 1;
      ten += 1;
    }
    if (pay === 20) {
      if (five >= 1 && ten >= 1) {
        five -= 1;
        ten -= 1;
      } else if (five >= 3) {
        five -= 3;
      } else return false;
    }
  }
  return true;
};
// @lc code=end
