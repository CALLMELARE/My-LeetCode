# Problem 2 [Add Two Numbers](https://leetcode-cn.com/problems/add-two-numbers/)

## Language

`JavaScript`

## Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example

### Input

> (2 -> 4 -> 3) + (5 -> 6 -> 4)

### Output

>7 -> 0 -> 8

### Explanation

>e.g. 342 + 465 = 807.

## Analysis



## Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans,head,plus=0;
    while(l1||l2){
        let a=l1?l1.val:0;
        let b=l2?l2.val:0;
        let sum=a+b+plus;
        plus=~~(sum/10); //converse position logical
        let node=new ListNode(sum%10);
        if(!ans){
            ans=head=node;
        }
        else{
            head.next=node;
            head=node;
        }
        if(l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next;
        }
    }
     if(plus){
            let node=new ListNode(plus);
            head.next=node;
            head=node;
        }
        return ans;
};
```
