/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const mem = (cb) => {
    const m = new Map()
    return n => {
      if (m.has(n)) {
        return m.get(n)
      }
      const ret = cb(n)
      m.set(n, ret)
      return ret
    }
  }
  const factorial = mem((n) => n <= 1 ? 1 : n * factorial(n - 1))
  
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  if (n === 2) {
    if (k % 2 == 0) {
      return arr[1] + '' + arr[0]
    } else {
      return arr.join('')
    }
  }

  const ret = []

  while (arr.length > 1) {
    const total = factorial(n)
    const perCount = total / n
    const flag = k % perCount
    let index

    if (flag === 0) {
      index = k / perCount - 1
      k = perCount
    } else {
      index = parseInt(k / perCount, 10)
      k = flag
    }

    n -= 1
    ret.push(arr[index])
    arr.splice(index, 1)
  }

  ret.push(arr[0])
  return ret.join('')
};

console.log(getPermutation(3, 2))