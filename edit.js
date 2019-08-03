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
