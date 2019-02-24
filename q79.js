/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const create2DArray = (row, column, defaultValue) => Array(row).fill(0).map(_ => Array(column).fill(defaultValue))

  const row = board.length
  const column = board[0].length
  const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const visited = create2DArray(row, column, false)

  const backtracking = (curLen, i, j) => {
    if (curLen === word.length) {
      return true
    }

    if (i < 0 || j < 0 || i >= row || j >= column || board[i][j] !== word[curLen] || visited[i][j]) {
      return false
    }

    visited[i][j] = true

    for (let k = 0; k < direction.length; k++) {
      const [ nextI, nextJ ] = [ i + direction[k][0], j + direction[k][1] ]
      if (backtracking(curLen + 1, nextI, nextJ)) {
        return true
      }
    }

    visited[i][j] = false
    return false
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === word[0]) {
        if (backtracking(0, i, j)) {
          return true
        }
      }
    }
  }

  return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCESEEDASFC"))