/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board === null || board.length === 0) {
    return 
  }

  const m = board.length
  const n = board[0].length

  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  const dfs = (board, r, c) => {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] != 'O') {
      return;
    }
    board[r][c] = 'T';
    for (const d of direction) {
      dfs(board, r + d[0], c + d[1]);
    }
}

  for (let i = 0; i < m; i++) {
    dfs(board, i, 0);
    dfs(board, i, n - 1);
  }

  for (let i = 0; i < n; i++) {
    dfs(board, 0, i);
    dfs(board, m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
      if (board[i][j] === 'T') {
        board[i][j] = 'O'
      }
    }
  }
};

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))