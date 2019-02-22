/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return []
  }

  const WRANG_NUMBER = -99

  const Direction = (() => {
    const directionEnum = [ 'RIGHT', 'DOWN', 'LEFT', 'UP' ]
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
    if (i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0) {
      return false
    }
    if (matrix[i][j] === WRANG_NUMBER) {
      return false
    }
    return true
  }


  let step = 0
  let maxStep = matrix.length * matrix[0].length
  let i = 0
  let j = 0
  const ret = []

  while (step < maxStep) {
    ret.push(matrix[i][j])
    matrix[i][j] = WRANG_NUMBER

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

console.log(spiralOrder([]))