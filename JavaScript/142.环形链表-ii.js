/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // 相遇
      fast = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow; // 返回相遇的节点
    }
  }

  return null; // 快指针变为null，说明链表中不存在环
};
// @lc code=end
