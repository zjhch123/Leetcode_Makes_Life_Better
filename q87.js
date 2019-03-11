/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1 === s2) {
    return true
  }
  if (s1.length !== s2.length) {
    return false
  }

  const bf = (s1, s2, a1, a2, b1, b2) => {
    if (a1 - a2 !== b1 - b2) {
      return false
    }
    if (a1 + 1 === a2) {
      return s1[a1] === s2[b1]
    }
    if (s1.split('').slice(a1, a2).sort().join('') !== s2.split('').slice(b1, b2).sort().join('')) {
      return false
    }

    for (let i = a1; i < a2; i++) {
      if (bf(s1, s2, a1, i, b1, i - a1 + b1) && bf(s1, s2, i, a2, i - a1 + b1, b2)) {
        return true
      }
      if (bf(s1, s2, a1, i, b2 - i + a1, b2) && bf(s1, s2, i, a2, b1, b2 - i + a1)) {
        return true
      }
    }

    return false
  }

  return bf(s1, s2, 0, s1.length, 0, s2.length)
};

console.log(isScramble('great', 'rgtae'))