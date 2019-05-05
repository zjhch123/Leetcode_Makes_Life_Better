/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let cuts = []
  let dp = ((s) => {
    let t = []
    for (let i = 0; i < s.length; i++) {
      t.push(Array(s.length).fill(false))
      cuts.push(i)
    }
    return t
  })(s)
  

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j <= 1 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        
        if (j === 0) {
          cuts[i] = 0
        } else {
          cuts[i] = Math.min(cuts[i], cuts[j - 1] + 1)
        }
      }
    }
  }

  return cuts[s.length - 1]
};