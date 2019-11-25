/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator % denominator === 0) {
    return '' + numerator / denominator
  }

  let prefix = numerator * denominator < 0 ? '-' : ''
  let ret = []
  let m, r

  const cache = []

  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)

  while (!cache.includes(numerator)) {
    m = numerator % denominator
    r = Math.floor(numerator / denominator)

    if (m === 0) {
      ret.push(r)
      break
    } else {
      cache.push(numerator)
      if (numerator < denominator) {
        ret.push(0)
        numerator *= 10
      } else {
        ret.push(r)
        numerator = m * 10
      }
    }
  }

  ret.splice(1, 0, '.')

  if (m === 0) {
    return prefix + ret.join('')
  }

  const repeatStartIndex = cache.indexOf(m * 10) + 1
  ret = [
    ...ret.slice(0, repeatStartIndex),
    '(',
    ...ret.slice(repeatStartIndex),
    ')'
  ];

  return prefix + ret.join('')
};

console.log(fractionToDecimal(4, 333));