/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s == p) {
    return true
  }

  let index = 0
  const regParts = []

  while(index < p.length) {
    if (p[index + 1] == '*') {
      regParts.push(`${p[index]}*`)
      index += 1
    } else {
      regParts.push(p[index])
    }
    index += 1
  }

  return isMatchImpl(s, regParts)
};

const isMatchImpl = (str, reg, strI = str.length - 1, regI = reg.length - 1) => {
  if (regI < 0) {
    return strI == -1
  }

  const currentPart = reg[regI]
  
  if (currentPart.length == 2) {
    if (isMatchImpl(str, reg, strI, regI - 1)) {
      return true
    }
    const character = currentPart[0]
    while (strI >= 0 && character == '.' || str[strI] == character) {
      strI -= 1
      if (isMatchImpl(str, reg, strI, regI - 1)) {
        return true
      }
    }
  } else if (currentPart == '.') {
    return isMatchImpl(str, reg, strI - 1, regI - 1)
  } else {
    return currentPart == str[strI] && isMatchImpl(str, reg, strI - 1, regI - 1)
  }

  return false
}

console.log(isMatch('ccccba', 'c*..'))