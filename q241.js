/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const mem = {}

  const dfs = (input) => {
    if (mem[input]) {
      return mem[input]
    }

    const result = []
    for (let i = 0; i < input.length; i++) {
      const chr = input[i]
      
      if (chr === '+' || chr === '-' || chr === '*') {
        const leftResult = diffWaysToCompute(input.slice(0, i))
        const rightResult = diffWaysToCompute(input.slice(i + 1))
  
        for (let lr of leftResult) {
          for (let rr of rightResult) {
            switch (chr) {
              case '+':
                result.push(lr + rr)
                break
              case '-':
                result.push(lr - rr)
                break
              case '*':
                result.push(lr * rr)
                break
            }
          }
        }
      }
    }
  
    if (result.length === 0) {
      result.push(Number(input))
    }

    mem[input] = result
    return result
  }

  return dfs(input)
};

console.log(diffWaysToCompute('2*3-4*5'))