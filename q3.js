/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const str = new Map()
  let length = 0
  let left = 0

  for (let i = 0; i < s.length; i++) {
    const right = i + 1
    const chr = s[i]
    
    if (str.get(chr) != null && str.get(chr) >= left) {
      left = str.get(chr) + 1
    } else if (right - left > length) {
      length = right - left
    }

    str.set(chr, i)
  }

  return length
};