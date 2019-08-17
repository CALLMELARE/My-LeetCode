# Problem 14 [Longest Common Prefix](https://leetcode-cn.com/problems/longest-common-prefix/)

## Language

`JavaScript`

## Description

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

## Example

### Input

> `["dog","racecar","car"]`

### Output

> ""

### Explanation

>There is no common prefix among the input strings.

## Analysis

Let `pre` to be the first letter of `strs`,compare it with string one by one until it's not match.
Return `pre`.
==Solution by @rhinoc==

## Solution

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var pre = strs[0] ? strs[0] : '';
    for (var i = 1; i < strs.length; i++) {
        var regex = new RegExp('^' + pre);
        while (!regex.test(strs[i]) && pre.length) {
            pre = pre.slice(0, pre.length - 1);
            regex = new RegExp('^' + pre);
        }
    }
    return pre;
};
```
