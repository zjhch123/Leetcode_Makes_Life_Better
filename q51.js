const solveNQueens = (N) => {
  if (N < 4 && N > 1) {
    return []
  }
  const create = () => {
    const result = []
    for (let i = 0; i < N; i++) {
      result.push([])
      for (let j = 0; j < N; j++) {
        result[i].push('.')
      }
    }
    return result
  }

  const board = create()
  const result = []

  const check = (row, column) => {
    for (let i = 0; i < N; i++) {
      if (board[row][i] === 'Q' || board[i][column] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = column + 1; i >= 0 && j >= 0; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    return true
  }

  const start = (num) => {
    if (num >= N) {
      result.push(board.map(i => i.join('')))
      return
    }

    for (let i = 0; i < N; i++) {
      if (check(num, i)) {
        board[num][i] = 'Q'
        start(num + 1)
        board[num][i] = '.'
      }
    }
  }

  start(0)

  return result
}
