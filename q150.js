/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []

  const op = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => ~~(a / b)
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    switch(token) {
      case '+':
      case '-':
      case '*':
      case '/':
        const n1 = Number(stack.pop())
        const n2 = Number(stack.pop())
        const ret = op[token](n2, n1)
        stack.push(ret)
        break
      default:
        stack.push(token)
    }
  }

  return stack.pop()
};


console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))