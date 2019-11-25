/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) {
    return ''
  }

  const m = (n - 1) % 26
  const char = String.fromCharCode(m + 65)
  const prefix = convertToTitle(Math.floor((n - 1) / 26))

  return prefix + char
};

console.log(convertToTitle(2626))