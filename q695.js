/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const direction = [[0,1], [0,-1],[1,0],[-1,0]]
  let maxArea = 0

  const row = grid.length
  if (row === 0) {
    return 0
  }

  const column = grid[0].length
  if (column === 0) {
    return 0
  }

  const dfs = (i, j) => {
    let area = 0
    if (i < 0 || i >= row || j < 0 || j >= column || grid[i][j] === 0) {
      return area
    }

    area = 1
    grid[i][j] = 0
    for (let dir of direction) {
      area += dfs(i + dir[0], j + dir[1])
    }

    return area
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      maxArea = Math.max(dfs(i, j), maxArea)
    }
  }

  return maxArea
};