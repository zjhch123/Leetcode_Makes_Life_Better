/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === null || s.length === 0 || s[0] === '0') {
    return 0
  }
  let pre1 = s[0] === '0' ? 0 : 1
  let pre2 = 1

  for (let i = 1; i < s.length; i++) {
    let cnt = 0

    if (s[i] > '0' && s[i] <= '9') cnt += pre1
    const number = Number(s.slice(i - 1, i + 1))
    if (number >= 10 && number <= 26) {
      cnt += pre2
    }

    pre2 = pre1
    pre1 = cnt
  }

  return pre1
};

console.log(numDecodings('10'))