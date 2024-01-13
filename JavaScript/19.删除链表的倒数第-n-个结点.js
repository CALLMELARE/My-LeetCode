/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let l = head,
    r = head;
  let count = 0;
  while (count < n) {
    if (r.next) {
      r = r.next;
      count += 1;
    } else {
      head = head.next;
      return head;
    }
  }
  while (r.next) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;
  return head;
};
// @lc code=end
