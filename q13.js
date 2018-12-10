/**
 * @param {string} s
 * @return {number}
 */

const mapping = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

var romanToInt = function(s) {
  let num = 0
  let index = 0
  const length = s.length

  while (index < length) {
    const chr = s[index]
    const now = mapping[chr]
    const next = mapping[s[index + 1]] || 0
    if (now < next) {
      num += next - now
      index += 1
    } else {
      num += now
    }
    index += 1
  }  

  return num
};