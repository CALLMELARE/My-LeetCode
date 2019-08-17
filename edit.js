/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 0) {
        return true
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            result = result && stack.length !== 0 && '(' === stack.pop();
        } else if (s[i] === ']') {
            result = result && stack.length !== 0 && '[' === stack.pop();
        } else if (s[i] === '}') {
            result = result && stack.length !== 0 && '{' === stack.pop();
        }
    }
};