/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) {
    return []
  }

  const ret = []
  const dict = new Set(wordDict)
  const len = s.length
  const dp = []

  dp[s.length] = true;
        
  for (let i = len - 1; i >= 0; --i) {
    for (let j = i; j < len; ++j) {
      if (dict.has(s.substring(i, j + 1)) && dp[j + 1]) {
        dp[i] = true;
        break;
      }
    }
  }

  const dfs = (nowIndex, strArr) => {
    if (nowIndex === s.length) {
      ret.push(strArr.join(' '))
      return
    }

    for (let i = nowIndex; i < s.length; i++) {
      const sub = s.slice(nowIndex, i + 1)
      if (!dict.has(sub)) {
        continue
      }
      if (!dp[i + 1]) {
        continue
      }

      strArr.push(sub)
      dfs(i + 1, strArr)
      strArr.pop()
    }
  }

  dfs(0, [])

  return ret
};