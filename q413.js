/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  const dp = Array(A.length).fill(0)
  let cur = 0
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1
      cur += dp[i]
    }
  }

  

  return cur
};