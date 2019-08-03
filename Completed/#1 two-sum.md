# Problem 1 [Two Sum](https://leetcode-cn.com/problems/two-sum/)

## Language

`JavaScript`

## Description

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Example

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,return [0, 1].

## Analysis

Set an array `a=[]` to save potential pairs, traverse the whole `nums` to try each number to find out that whether it equal to `target-num[index]`, then we can figure out the indices.

## Solution

JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a=[];
    for(let index=0,len=nums.length;index<len;index++){
        let temp=target-nums[index];
        if(a[temp]!==undefined)
            return [a[temp],index];
        a[nums[index]]=index;
    }
};
```
