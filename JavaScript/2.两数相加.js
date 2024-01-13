/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let ptr = head;
  let carry = 0;

  while (true) {
    if (l1 !== null) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      carry += l2.val;
      l2 = l2.next;
    }

    ptr.val = carry % 10;
    carry = Math.floor(carry / 10);

    if (l1 !== null || l2 !== null || carry !== 0) {
      ptr.next = new ListNode(0);
      ptr = ptr.next;
    } else {
      break;
    }
  }

  return head;
};
// @lc code=end
