/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const isNumber = function (s) {
  const State = {
    STATE_INITIAL: "STATE_INITIAL",
    STATE_INT_SIGN: "STATE_INT_SIGN",
    STATE_INTEGER: "STATE_INTEGER",
    STATE_POINT: "STATE_POINT",
    STATE_POINT_WITHOUT_INT: "STATE_POINT_WITHOUT_INT",
    STATE_FRACTION: "STATE_FRACTION",
    STATE_EXP: "STATE_EXP",
    STATE_EXP_SIGN: "STATE_EXP_SIGN",
    STATE_EXP_NUMBER: "STATE_EXP_NUMBER",
    STATE_END: "STATE_END",
  };

  const CharType = {
    CHAR_NUMBER: "CHAR_NUMBER",
    CHAR_EXP: "CHAR_EXP",
    CHAR_POINT: "CHAR_POINT",
    CHAR_SIGN: "CHAR_SIGN",
    CHAR_ILLEGAL: "CHAR_ILLEGAL",
  };

  const transfer = new Map([
    [
      State.STATE_INITIAL,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_INTEGER],
        [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
        [CharType.CHAR_SIGN, State.STATE_INT_SIGN],
      ]),
    ],
    [
      State.STATE_INT_SIGN,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_INTEGER],
        [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
      ]),
    ],
    [
      State.STATE_INTEGER,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_INTEGER],
        [CharType.CHAR_EXP, State.STATE_EXP],
        [CharType.CHAR_POINT, State.STATE_POINT],
      ]),
    ],
    [
      State.STATE_POINT,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_FRACTION],
        [CharType.CHAR_EXP, State.STATE_EXP],
      ]),
    ],
    [
      State.STATE_POINT_WITHOUT_INT,
      new Map([[CharType.CHAR_NUMBER, State.STATE_FRACTION]]),
    ],
    [
      State.STATE_FRACTION,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_FRACTION],
        [CharType.CHAR_EXP, State.STATE_EXP],
      ]),
    ],
    [
      State.STATE_EXP,
      new Map([
        [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
        [CharType.CHAR_SIGN, State.STATE_EXP_SIGN],
      ]),
    ],
    [
      State.STATE_EXP_SIGN,
      new Map([[CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER]]),
    ],
    [
      State.STATE_EXP_NUMBER,
      new Map([[CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER]]),
    ],
  ]);

  const toCharType = (ch) => {
    if (!isNaN(ch)) {
      return CharType.CHAR_NUMBER;
    } else if (ch.toLowerCase() === "e") {
      return CharType.CHAR_EXP;
    } else if (ch === ".") {
      return CharType.CHAR_POINT;
    } else if (ch === "+" || ch === "-") {
      return CharType.CHAR_SIGN;
    } else {
      return CharType.CHAR_ILLEGAL;
    }
  };

  let state = State.STATE_INITIAL;

  for (const ch of s.trim()) {
    const type = toCharType(ch);
    if (!transfer.get(state).has(type)) {
      return false;
    } else {
      state = transfer.get(state).get(type);
    }
  }

  return (
    state === State.STATE_INTEGER ||
    state === State.STATE_POINT ||
    state === State.STATE_FRACTION ||
    state === State.STATE_EXP_NUMBER ||
    state === State.STATE_END
  );
};

// @lc code=end
