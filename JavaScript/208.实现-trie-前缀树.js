/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentNode = this.root;
  for (const char of word) {
    if (!currentNode.children.has(char)) {
      currentNode.children.set(char, new TrieNode());
    }
    currentNode = currentNode.children.get(char);
  }
  currentNode.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentNode = this.root;
  for (const char of word) {
    if (!currentNode.children.has(char)) {
      return false;
    }
    currentNode = currentNode.children.get(char);
  }
  return currentNode.isEndOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root;
  for (const char of prefix) {
    if (!currentNode.children.has(char)) {
      return false;
    }
    currentNode = currentNode.children.get(char);
  }
  return true;
};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
