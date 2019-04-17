/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }

  const ret = [[1], [1,1]]

  const build = (numRows) => {
    for (let i = 2; i < numRows; i++) {
      const row = [1]
      const prevRow = ret[i - 1]

      for (let j = 1; j < i; j++) {
        row.push(prevRow[j] + prevRow[j - 1])
      }

      row.push(1)
      ret.push(row)
    }

    return ret
  }

  return build(numRows)
};