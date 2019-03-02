/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) {
    return ""
  } else if (t === s) {
    return t
  } else if (t === '') {
    return ''
  }

  const tCount = new Map()
  let left = 0
  let right = 0

  for (let i = 0; i < t.length; i++) {
    if (tCount.get(t[i]) === null || typeof tCount.get(t[i]) === 'undefined') {
      tCount.set(t[i], 1)
    } else {
      tCount.set(t[i], tCount.get(t[i]) + 1)
    }
  }

  for (let key of tCount.keys()) {
    const count = tCount.get(key)

    let found = 0

    for (let i = 0; i < s.length; i++) {
      if (s[i] === key) {
        found += 1
      }
      if (found === count) {
        right = Math.max(i, right)
        break
      }
    }

    if (found < count) {
      return ''
    }
  }

  let range = [left, right]

  const set = new Set(t.split(''))

  const findCharInString = (startIndex, char, string) => {
    const count = tCount.get(char)
    let found = 0
    for (let i = startIndex; i < string.length; i++) {
      if (string[i] === char) {
        found += 1
      }
      if (found === count) {
        return i
      }
    }
    return -1
  }

  while (true) {
    if (right === s.length - 1 && right - left + 1 === t.length) {
      break
    }
    let nextRight = right
    const chr = s[left]

    if (set.has(chr)) {
      nextRight = findCharInString(left + 1, chr, s)
      if (nextRight === -1) {
        break
      }
      right = Math.max(nextRight, right)
    }

    left += 1
    if (right - left < range[1] - range[0]) {
      range = [left, right]
    }
  }

  return s.slice(range[0], range[1] + 1)
};

console.log(minWindow('bbaas', 'bab'))