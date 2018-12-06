/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  if (x < 10) {
    return true
  }
  let reverse = 0
  let n = x
  while(n > 0) {
    reverse = reverse * 10 + n % 10
    n = ((n - n % 10) / 10)
  }

  return reverse == x
};
