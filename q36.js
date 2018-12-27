/**
 * @param {character[][]} board
 * @return {boolean}
 * 我靠，暴力解法竟然98.23%
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) { // row
    const o = {}
    for (let j = 0; j < 9; j++) {
      const chr = board[i][j]
      if (chr === '.') {
        continue
      } else {
        if (!!o[chr]) {
          return false
        } else {
          o[chr] = true
        }
      }
    }
  }

  for (let i = 0; i < 9; i++) { // column
    const o = {}
    for (let j = 0; j < 9; j++) {
      const chr = board[j][i]
      if (chr === '.') {
        continue
      } else {
        if (!!o[chr]) {
          return false
        } else {
          o[chr] = true
        }
      }
    }
  }

  for (let i = 0; i < 9; i += 3) { // 3x3
    for (let j = 0; j < 9; j += 3) {
      const o = {}
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          const chr = board[k][l]
          if (chr === '.') {
            continue
          } else {
            if (!!o[chr]) {
              return false
            } else {
              o[chr] = true
            }
          }
        }
      }
    }
  }

  return true
};