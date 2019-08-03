# Problem 9 [Palindrome Number](https://leetcode-cn.com/problems/palindrome-number/)

## Language

`JavaScript`

## Description

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

## Example

### Input

> 1. 121
> 2. -121

### Output

> 1. `true`
> 2. `false`

### Explanation

> 1. palindrome
> 2. From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

## Analysis

First, prevent obviously impossible number by limit range of number.
Then, compare each number in `x` with the corresponding number in certain position.
Last, return in boolean.

## Solution

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false;
    }
    let rev = 0;
    while (x > rev) {
        rev = Math.floor(rev * 10 + x % 10);
        x = Math.floor(x / 10);
    }
    return x === rev || x === Math.floor(rev / 10);
};
```
