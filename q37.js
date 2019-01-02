/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * fuck for global variable
 */


var solveSudoku = function(board) {
  var row = new Array(9)
  var column = new Array(9)
  var cell = new Array(9)

  var __cellId = (i, j) => parseInt((i / 3)) * 3 + parseInt((j / 3))

  var __fill = function(i, j, num) {
    if (typeof row[i] === 'undefined') {
      row[i] = []
    }
    if (typeof column[j] === 'undefined') {
      column[j] = []
    }
    if (typeof cell[__cellId(i, j)] === 'undefined') {
      cell[__cellId(i, j)] = []
    }
    if (isNaN(num)) {
      return
    }
    row[i][num] = true
    column[j][num] = true
    cell[__cellId(i, j)][num] = true
  }

  var __clear = function(i, j, num) {
    row[i][num] = false
    column[j][num] = false
    cell[__cellId(i, j)][num] = false
  }

  var ___isValid = function(i, j, num) {
    return !row[i][num] && !column[j][num] && !cell[__cellId(i, j)][num]
  }

  var __solve = function(board, index) {
    if (index > 80) { return true }
    const r = parseInt(index / 9)
    const c = index - 9 * r
    if (board[r][c] !== '.') { 
      return __solve(board, index + 1) 
    } else {
      for (let num = 1; num <= 9; num++) {
        board[r][c] = num + ''
        if (___isValid(r, c, num)) {
          __fill(r, c, num)
          if (__solve(board, index + 1)) {
            return true
          }
          __clear(r, c, num)
        }
      }
      board[r][c] = '.'
    }
    return false
  }

  const start = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        __fill(i, j, parseInt(board[i][j]))
      }
    }
  
    if (__solve(board, 0)) {
      return
    }
  }

  start(board)
};

// const a = [
//   [".",".","9","7","4","8",".",".","."],
//   ["7",".",".",".",".",".",".",".","."],
//   [".","2",".","1",".","9",".",".","."],
//   [".",".","7",".",".",".","2","4","."],
//   [".","6","4",".","1",".","5","9","."],
//   [".","9","8",".",".",".","3",".","."],
//   [".",".",".","8",".","3",".","2","."],
//   [".",".",".",".",".",".",".",".","6"],
//   [".",".",".","2","7","5","9",".","."]
// ]
// solveSudoku(a)

// console.log(a)