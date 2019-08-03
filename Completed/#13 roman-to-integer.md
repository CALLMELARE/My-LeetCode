# Problem 13 [Roman to Integer](https://leetcode-cn.com/problems/roman-to-integer/)

## Language

`JavaScript`


## Description

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and`M`.
| Symbol | Value |
:-:|:-:
| I | 1 |
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and`M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

## Example

### Input

> "LVIII"

### Output

> 58

### Explanation

> `L` = 50, `V`= 5, `III` = 3.

## Analysis

First, set a JSON called `romans` to store the relation between roman and number.
Then, traverse to match the romans.
Finally, return the answer `sum`.

## Solution

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let sum = romans[s[0]];
    for (let i = 1; i < s.length; i++) {
        let temp = 0;
        if (romans[s[i]] > romans[s[i - 1]]) {
            temp = romans[s[i]] - 2 * romans[s[i - 1]];
        } else if (romans[s[i]] <= romans[s[i - 1]]) {
            temp = romans[s[i]];
        }
        sum += temp;
    }
    return sum;
};

```
