/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const l1 = num1.length
  const l2 = num2.length

  let result = Array(l1 + l2).fill(0);
  
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const nowPos = i + j + 1
      const nextPos = i + j

      const temp = result[nowPos] + (num1[i] - '0') * (num2[j] - '0')

      result[nowPos] = temp % 10
      result[nextPos] += Math.floor(temp / 10)
    }
  }

  while(result[0] === 0) {
    result.shift()
  }

  return result.length === 0 ? '0' : result.join('')
};