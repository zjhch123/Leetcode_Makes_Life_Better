/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) {
    return s
  }
  const splitNum = numRows - 2
  const graph = Array(numRows).fill('')
  let y = 0

  for (let i = 0; i < s.length; i++) {
    if (y == numRows) {
      y -= 1
      for (let j = 0; j < splitNum && i < s.length; j++, i++) {
        y -= 1
        graph[y] += s[i]
      }
      y = 0
      i --
    } else {
      graph[y] += s[i]
      y += 1
    }
  }
  return graph.reduce((a, b) => a + b, '')
};

console.log(convert("PAYPALISHIRING", 4))