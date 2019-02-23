/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) {
    return [[]]
  }

  const create2DArray = (row, column, defaultValue) => Array(row).fill(1).map(_ => Array(column).fill(defaultValue))

  const WRANG_NUMBER = -99
  const ret = create2DArray(n, n, WRANG_NUMBER)

  const Direction = (() => {
    const directionEnum = ['RIGHT', 'DOWN', 'LEFT', 'UP']
    let index = 0

    return {
      getNowDirection() {
        return directionEnum[index]
      },
      nextStep() {
        index = index + 1 > 3 ? 0 : index + 1
        return this.getNowDirection()
      }
    }
  })()

  const check = (i, j) => {
    if (i >= n || j >= n || i < 0 || j < 0) {
      return false
    }
    if (ret[i][j] !== WRANG_NUMBER) {
      return false
    }
    return true
  }

  let step = 1
  let maxStep = n ** 2
  let i = 0
  let j = 0

  while (step <= maxStep) {
    ret[i][j] = step

    const dir = Direction.getNowDirection()
    switch (dir) {
      case 'RIGHT':
        if (check(i, j + 1)) {
          j += 1
        } else {
          i += 1
          Direction.nextStep()
        }
        break
      case 'DOWN':
        if (check(i + 1, j)) {
          i += 1
        } else {
          j -= 1
          Direction.nextStep()
        }
        break
      case 'LEFT':
        if (check(i, j - 1)) {
          j -= 1
        } else {
          i -= 1
          Direction.nextStep()
        }
        break
      case 'UP':
        if (check(i - 1, j)) {
          i -= 1
        } else {
          j += 1
          Direction.nextStep()
        }
        break
    }

    step += 1
  }

  return ret
};

console.log(generateMatrix(5))