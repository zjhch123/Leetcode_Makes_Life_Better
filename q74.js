/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0) {
    return false
  }
  const row = matrix.length
  const column = matrix[0].length

  let lr = 0
  let rr = row - 1

  while (lr <= rr) {
    const mid = Math.floor((lr + rr) / 2)
    if (matrix[mid][0] === target) {
      return true
    } else if (matrix[mid][0] > target) {
      rr = mid - 1
    } else {
      lr = mid + 1
    }
  }

  const determinedRow = lr - 1

  if (determinedRow < 0) {
    return false
  }

  let lc = 0
  let rc = column - 1

  while (lc <= rc) {
    const mid = Math.floor((lc + rc) / 2)

    if (matrix[determinedRow][mid] === target) {
      return true
    } else if (matrix[determinedRow][mid] > target) {
      rc = mid - 1
    } else {
      lc = mid + 1
    }
  }

  return false
};