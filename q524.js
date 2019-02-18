/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  const isValid = (s, substr) => {
    let ptr1 = 0 // -> s
    let ptr2 = 0 // -> substr
  
    while (ptr1 < s.length) {
      if (s[ptr1] === substr[ptr2]) {
        ptr2 += 1
      }
      ptr1 += 1
    }
  
    return ptr2 === substr.length
  }

  d = d.sort()

  let longest = ''
  let longestLength = 0
  const sLength = s.length

  for (let i = 0; i < d.length; i++) {
    const substr = d[i]
    const subsLength = substr.length

    if (subsLength <= sLength && subsLength > longestLength && isValid(s, substr)) {
      longest = substr
      longestLength = subsLength
    }
  }

  return longest
};

console.log(findLongestWord("bab", ["ba","ab","a","b"]))