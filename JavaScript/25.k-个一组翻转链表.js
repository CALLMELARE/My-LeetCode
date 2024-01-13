/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }

  if (length < k) {
    return head;
  }

  let prev = null;
  let curr = head;
  let next = null;

  for (let i = 0; i < k; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  head.next = reverseKGroup(curr, k);
  return prev;
};
// @lc code=end
