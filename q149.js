/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points === null || points.length === 0) {
    return 0
  }

  const len = points.length
  let max = 0

  const getK = (p1, p2) => {
    const [x1, y1] = p1
    const [x2, y2] = p2

    if (x1 === x2) {
      return -999999
    }
    return (y1 - y2) / (x1 - x2)
  }

  const isSamePoint = (p1, p2) => p1[0] === p2[0] && p1[1] === p2[1]

  for (let i = 0; i < len; i++) {
    const p1 = points[i]
    const m = new Map()
    let samePoint = 0
    let pointMax = 0

    for (let j = 0; j !== i && j < len; j++) {
      const p2 = points[j]

      if (isSamePoint(p1, p2)) {
        samePoint += 1
        continue
      }

      const k = getK(p1, p2)
      const count = (m.has(k) ? m.get(k) : 0) + 1
      m.set(k, count)
      pointMax = Math.max(count, pointMax)
    }

    max = Math.max(max, pointMax + samePoint)
  }

  return max + 1
};