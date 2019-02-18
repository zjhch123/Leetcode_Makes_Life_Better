/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = {
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
  }

  let left = 0
  let right = s.length - 1

  const chars = s.split('')
  
  while (left < right) {
    while (left < right && vowels[chars[left]] !== 1) {
      left += 1
    }
    while (left < right && vowels[chars[right]] !== 1) {
      right -= 1
    }

    if (left < right) {
      [ chars[left], chars[right] ] = [ chars[right], chars[left] ];
      left += 1
      right -= 1
    }
  }

  return chars.join('')
};

console.log(reverseVowels('a'))