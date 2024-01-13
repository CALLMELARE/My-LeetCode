/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = new Map();
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.addToHead = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  };

  this.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };

  this.moveToHead = function (node) {
    this.removeNode(node);
    this.addToHead(node);
  };

  this.removeTail = function () {
    const tailNode = this.tail.prev;
    this.removeNode(tailNode);
    return tailNode;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.moveToHead(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    node.value = value;
    this.moveToHead(node);
  } else {
    const newNode = new ListNode(key, value);
    this.cache.set(key, newNode);
    this.addToHead(newNode);
    this.size++;

    if (this.size > this.capacity) {
      const tailNode = this.removeTail();
      this.cache.delete(tailNode.key);
      this.size--;
    }
  }
};

class ListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
