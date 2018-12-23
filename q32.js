/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let longest = 0
  
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left += 1
    } else {
      right += 1
    }

    if (left === right) {
       longest = Math.max(longest, left * 2)
    } else if (right > left) {
      left = 0
      right = 0
    }
  }
 
  left = right = 0
    
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left += 1
    } else {
      right += 1
    }

    if (left === right) {
       longest = Math.max(longest, left * 2)
    } else if (left > right) {
      left = 0
      right = 0
    }
  }

  return longest
};
