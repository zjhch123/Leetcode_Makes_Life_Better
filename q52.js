const totalNQueens = (N) => {
  if (N < 4 && N > 1) {
    return 0
  }

  const board = (() => {
    const r = []
    for (let i = 0; i < N; i++) {
      r.push([])
      for (let j = 0; j < N; j++) {
        r[i].push(0)
      }
    }
    return r
  })()

  let resultNum = 0

  const check = (row, column) => {
    for (let i = 0; i < N; i++) {
      if (board[row][i] === 1 || board[i][column] === 1) {
        return false
      }
    }

    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        return false
      }
    }

    for (let i = row - 1, j = column + 1; i >= 0 && j >= 0; i--, j++) {
      if (board[i][j] === 1) {
        return false
      }
    }

    return true
  }

  const start = (num) => {
    if (num >= N) {
      resultNum += 1
      return
    }

    for (let i = 0; i < N; i++) {
      if (check(num, i)) {
        board[num][i] = 1
        start(num + 1)
        board[num][i] = 0
      }
    }
  }

  start(0)

  return resultNum
}
