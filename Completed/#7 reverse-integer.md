# Problem 7 [Reverse Integer](https://leetcode-cn.com/problems/reverse-integer/)

## Language

`JavaScript` `Java`

## Description

Given a 32-bit signed integer, reverse digits of an integer.

## Example

### Input

> 1. 123
> 2. -123
> 3. 123

### Output

> 1. 321
> 2. -321
> 3. 21

### Explanation

>Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Analysis

The biggest problem is to prevent overflow, so we check the origin `x` and the answer `ans`. If they're bigger than `2^31-1`, print `0` directly.
Besides, we reverse the number `x` by read and traverse as string reversed.

## Solution

`JavaScript`

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return 0;
    Math.abs(x)>(2**31-1)?x=0:x;
    let ans='';
    let rev = Math.abs(x).toString();
    for(var i =0;i<rev.length;i++){
        ans += rev[rev.length-i-1]
    }
    return parseInt(Math.abs(ans)>(2**31-1)?len=0:(x<0?-ans:ans));
};
```

`Java`

```java
class Solution {
    public int reverse(int x) {
         long rev= 0;
        while( x != 0){
            rev= rev*10 + x % 10;
            x= x/10;
            if( rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE)
                return 0;
        }
        return (int) rev;

    }
}
```
