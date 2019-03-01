/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = []
  const splitedPath = path.split('/')
  for (let i = 0; i < splitedPath.length; i++) {
    const path = splitedPath[i]
    if (path === '') {
      continue
    } else if (path === '..') {
      stack.pop()
    } else if (path === '.') {
      continue
    } else {
      stack.push(path)
    }
  }

  return '/' + stack.join('/')
};

console.log(simplifyPath("/../"))