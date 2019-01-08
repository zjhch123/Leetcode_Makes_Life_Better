/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let length = 1
  let anchor = 0
  let prev = chars[0]
  
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === prev) {
      length += 1
    } else {
      chars[anchor++] = prev

      if (length > 1) {
        length.toString().split('').forEach((num) => chars[anchor++] = num)
      }

      prev = chars[i]
      length = 1
    }
  }

  chars[anchor++] = prev
  
  if (length > 1) {
    length.toString().split('').forEach((num) => chars[anchor++] = num)
  }

  return anchor
};
