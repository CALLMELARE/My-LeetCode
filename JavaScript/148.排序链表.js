/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  const arr = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  if (arr.length === 0) return null;

  const list = arr.sort((a, b) => a - b);
  const q = new ListNode(list[0]);
  let node = q;

  for (let i = 1; i < list.length; i++) {
    node.next = new ListNode(list[i]);
    node = node.next;
  }

  return q;
};
// @lc code=end
