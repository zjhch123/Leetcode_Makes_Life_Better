/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let sp = 0,
    pp = 0,
    match = 0,
    starIdx = -1;

  while (sp < s.length) {
    if (pp < p.length && (p[pp] === s[sp] || p[pp] === '?')) {
      sp += 1
      pp += 1
    } else if (p[pp] === '*') {
      match = sp
      starIdx = pp
      pp += 1
    } else if (starIdx !== -1) {
      pp = starIdx + 1
      match += 1
      sp = match
    } else {
      return false
    }
  }

  while (pp < p.length && p[pp] === '*') {
    pp += 1
  }
  
  return pp == p.length
};

console.log(isMatch('aa', 'a'), false)
console.log(isMatch('aa', 'a*'), true)
console.log(isMatch('aa', '*'), true)
console.log(isMatch('cb', '*a'), false)
console.log(isMatch('cb', '?a'), false)
console.log(isMatch('adceb', '*a*b'), true)
console.log(isMatch('acdcb', 'a*c?b'), false)
console.log(isMatch('', '*'), true)
console.log(isMatch('a', '*'), true)
console.log(isMatch('a', '?'), true)