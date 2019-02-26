/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const l1 = a.length
  const l2 = b.length

  const prefix = Math.abs(l1 - l2)
  const result = Array(Math.max(l1, l2))

  const [ short, long ] = l1 >= l2 ? [ b, a ] : [ a, b ]

  let add = 0

  for (let i = result.length - 1; i >= 0; i--) {
    const integer1 = (long[i] || '0') - '0'
    const integer2 = (short[i - prefix] || '0') - '0'

    let addResult = integer1 + integer2 + add
    if (addResult >= 2) {
      add = 1
      addResult -= 2
    } else {
      add = 0
    }

    result[i] = addResult
  }

  if (add === 1) {
    result.splice(0, 0, 1)
  }

  return result.join('')
};

console.log(addBinary('1111', '1111'))