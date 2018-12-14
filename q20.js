/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length == 0) {
    return true
  }

  const Stack = (() => {
    const arr = []
  
    return {
      toString() {
        return arr.join(',')
      },
      pop() {
        return arr.pop()
      },
      push(item) {
        arr.push(item)
      },
      size() {
        return arr.length
      }
    }
  })()

  const valid = ['()', '[]', '{}']

  for (let i = 0; i < s.length; i++) {
    const next = s[i]
    if (next == '(' || next == '{' || next == '[') {
      Stack.push(next)
    } else {
      const top = Stack.pop()
      if (valid.indexOf(top + next) !== -1) {
        continue
      }
      return false
    }
  }
  return Stack.size() === 0
};

console.log(isValid("{[]}"))