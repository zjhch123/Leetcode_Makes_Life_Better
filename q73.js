/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (matrix === null || matrix.length === 0) {
    return 
  }

  const row = matrix.length
  const column = matrix[0].length

  const r = new Set()
  const c = new Set()

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === 0) {
        r.add(i)
        c.add(j)
      }
    }
  }

  for (let i of r.keys()) {
    for (let k = 0; k < column; k++) {
      matrix[i][k] = 0
    }
  }
  for (let j of c.keys()) {
    for (let k = 0; k < row; k++) {
      matrix[k][j] = 0
    }
  }
};

console.log(setZeroes([[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]))