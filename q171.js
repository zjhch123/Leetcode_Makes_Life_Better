/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const parseCharToNumber = (char) => char.charCodeAt(0) - 65
  let count = s.length - 1
  let ret = 0
  for (let i = 0; i <= count; i += 1) {
    ret += (parseCharToNumber(s[i]) + 1) * Math.pow(26, count - i)
  }

  return ret
};

console.log(titleToNumber('ZJH'))