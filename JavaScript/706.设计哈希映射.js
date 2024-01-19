/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.bucketSize = 1000;
  this.buckets = new Array(this.bucketSize).fill(null);
  this.getHash = (key) => {
    return key % this.bucketSize; // 哈希函数，取余数
  };
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.getHash(key);
  if (this.buckets[hash] === null) {
    this.buckets[hash] = [];
  }
  for (let i = 0; i < this.buckets[hash].length; i++) {
    if (this.buckets[hash][i][0] === key) {
      this.buckets[hash][i][1] = value;
      return;
    }
  }
  this.buckets[hash].push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.getHash(key);
  if (this.buckets[hash] === null) {
    return -1;
  }
  for (let i = 0; i < this.buckets[hash].length; i++) {
    if (this.buckets[hash][i][0] === key) {
      return this.buckets[hash][i][1];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.getHash(key);
  if (this.buckets[hash] === null) {
    return;
  }
  for (let i = 0; i < this.buckets[hash].length; i++) {
    if (this.buckets[hash][i][0] === key) {
      this.buckets[hash].splice(i, 1);
      return;
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
