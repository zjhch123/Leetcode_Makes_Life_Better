/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) {
    return true
  }

  const dictSet = new Set(wordDict)
  const dp = [true]

  for (let i = 1; i <= s.length; i++) {
    const str = s.slice(0, i)
    if (dictSet.has(str)) {
      dp[i] = true
      continue
    }

    for (let j = i - 1; j >= 0; j--) {
      if (dp[j]) {
        const substr = s.slice(j, i)
        if (dictSet.has(substr)) {
          dp[i] = true
          continue
        }
      }
    }
  }

  return dp[s.length] || false
};

console.log(wordBreak('leetcodeleet', ['leet', 'code']))