/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // 快慢指针找到链表中点
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转后半部分链表
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 比较前后两部分链表的值是否相等
  while (prev) {
    if (head.val !== prev.val) {
      return false;
    }
    head = head.next;
    prev = prev.next;
  }

  return true;
};
// @lc code=end
