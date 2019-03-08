/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) {
    return [0]
  }
  if (n === 1) {
    return [0, 1]
  }
  if (n === 2) {
    return [0,1,3,2]
  }
  const prevRet = grayCode(n - 1)
  const prefix = 2 ** (n - 1)

  const totalCount = prevRet.length

  for (let i = 0; i < totalCount; i++) {
    prevRet.push(prevRet[totalCount - 1 - i] + prefix)
  }

  return prevRet
};

console.log(grayCode(8))