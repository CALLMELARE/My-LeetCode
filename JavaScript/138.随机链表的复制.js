/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }

  const visited = new Map();

  let oldNode = head;
  let newNode = new Node(oldNode.val);
  visited.set(oldNode, newNode);

  while (oldNode !== null) {
    newNode.random = getClonedNode(oldNode.random);
    newNode.next = getClonedNode(oldNode.next);

    oldNode = oldNode.next;
    newNode = newNode.next;
  }

  return visited.get(head);

  function getClonedNode(node) {
    if (node !== null) {
      if (!visited.has(node)) {
        visited.set(node, new Node(node.val));
      }
      return visited.get(node);
    }
    return null;
  }
};
// @lc code=end
