/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function(S) {
  if (S === null || S.length === 0) {
    return 0
  }

  const size = S.length + 1
  let count = 0

  const isValid = (j, signal, prevNumber, arr) => {
    if (arr.size === 0) { return true }
    if (arr.has(j)) { return false }
    switch (signal) {
      case 'I': return j > prevNumber
      case 'D': return j < prevNumber
      case 'W': return true
    }
  }

  const backtracking = (index, r, arr, prevNumber = -1) => {
    if (arr.size === S.length + 1) {
      count += 1
      return
    }

    const signal = index === 0 ? 'W' : S[index - 1]
    let startNumber = 0
    let endNumber = size

    if (prevNumber !== -1) {
      startNumber = signal === 'D' ? 0 : prevNumber + 1
      endNumber = signal === 'D' ? prevNumber : size
    }

    for (let j = startNumber; j < endNumber; j++) {
      if (isValid(j, signal, prevNumber, arr)) {
        arr.add(j)
        backtracking(index + 1, r + 1, arr, j)
        arr.delete(j)
      }
    }
  }

  backtracking(0, 0, new Set())

  return count
};

console.log(numPermsDISequence('DID'))