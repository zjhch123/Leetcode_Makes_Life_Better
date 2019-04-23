/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = ''
  let str2 = ''
  
  str = s.replace(/\W+/g, '').toLowerCase()

  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i]
  }

  return str === str2
};
