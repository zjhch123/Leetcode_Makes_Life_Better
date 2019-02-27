/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const direction = [[0,1],[0,-1],[1,0],[-1,0]]
  let islands = 0

  if (grid === null || grid.length === 0) {
    return islands
  }

  const row = grid.length
  const column = grid[0].length

  const dfs = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    for (let dir of direction) {
      dfs(i + dir[0], j + dir[1])
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        islands += 1
      }
    }
  }
  return islands
};