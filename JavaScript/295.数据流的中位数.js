/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
var MedianFinder = function () {
  this.maxHeap = new MaxHeap();
  this.minHeap = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
    this.maxHeap.insert(num);
  } else {
    this.minHeap.insert(num);
  }

  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.insert(this.maxHeap.extract());
  } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
    this.maxHeap.insert(this.minHeap.extract());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() === this.minHeap.size()) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  } else if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.peek();
  } else {
    return this.minHeap.peek();
  }
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  extract() {
    if (this.isEmpty()) return null;
    const max = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return max;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      let maxIndex = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex === index) break;

      this.swap(index, maxIndex);
      index = maxIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  extract() {
    if (this.isEmpty()) return null;
    const min = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) break;

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      let minIndex = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
