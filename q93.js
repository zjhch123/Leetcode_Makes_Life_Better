/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ret = new Set()
  
  const backtracking = (s, ip = [], numberIndex = 0, startIndex = 0) => {
    if (numberIndex > 3 && startIndex >= s.length) {
      ret.add(ip.join('.'))
      return
    } else if (startIndex >= s.length) {
      return
    } else if (numberIndex > 3) {
      return
    }

    for (let i = 1; i <= 3; i++) {
      const number = s.slice(startIndex, startIndex + i)
      if (parseInt(number) <= 255) {
        ip.push(number)
        backtracking(s, ip, numberIndex + 1, startIndex + i)
        ip.length = ip.length - 1
        
        if (number[0] === '0') {
          break
        }
      }
    }
  }

  backtracking(s)
  return Array.from(ret)
};

console.log(restoreIpAddresses("025525511"))