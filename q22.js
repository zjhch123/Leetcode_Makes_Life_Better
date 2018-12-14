/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n == 0) {
    return []
  }
  if (n == 1) {
    return [ '()' ]
  }

  const result = []

  const helper = (current, left, right) => {
    if (current.length == 2 * n) {
      result.push(current)
      return
    }
    if (left < n) {
      helper(current + '(', left + 1, right)
    }
    if (right < left) {
      helper(current + ')', left, right + 1)
    }
  }

  helper('', 0, 0)
  return result
};
