/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const mid = Math.floor(lists.length / 2);
  const left = lists.slice(0, mid);
  const right = lists.slice(mid);

  const a = mergeKLists(left);
  const b = mergeKLists(right);

  return mergeTwoLists(a, b);
};
function mergeTwoLists(a, b) {
  if (!a) return b;
  if (!b) return a;

  if (a.val < b.val) {
    a.next = mergeTwoLists(a.next, b);
    return a;
  } else {
    b.next = mergeTwoLists(a, b.next);
    return b;
  }
}
// @lc code=end
