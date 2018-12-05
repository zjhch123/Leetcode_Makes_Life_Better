/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let substring = ''
  let maxLength = 0

  s = '-' + s.split('').join('-') + '-'

  for (let i = 0; i < s.length; i++) {
    let count = 1
    let left = i
    let right = i
    while (left - 1 >= 0 && right + 1 < s.length && s[left - 1] == s[right + 1]) {
      left --
      right ++
      count += 2
    }

    if (count > maxLength) {
      substring = s.slice(left, right)
      maxLength = count
    }
  }

  return substring.replace(/-/g, '')
};
