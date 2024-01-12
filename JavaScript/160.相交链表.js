/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  let lenA = 0;
  let lenB = 0;

  // 计算链表A的长度
  while (pA !== null) {
    lenA++;
    pA = pA.next;
  }

  // 计算链表B的长度
  while (pB !== null) {
    lenB++;
    pB = pB.next;
  }

  // 将pA和pB重新指向链表头部
  pA = headA;
  pB = headB;

  // 如果链表A比链表B长，将pA向后移动到与链表B相同长度的位置
  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff > 0) {
      pA = pA.next;
      diff--;
    }
  }

  // 如果链表B比链表A长，将pB向后移动到与链表A相同长度的位置
  if (lenB > lenA) {
    let diff = lenB - lenA;
    while (diff > 0) {
      pB = pB.next;
      diff--;
    }
  }

  // 同时遍历链表A和链表B，找到相交的节点
  while (pA !== null && pB !== null) {
    if (pA === pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }

  return null;
};

// @lc code=end
