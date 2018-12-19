/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)

  const r0 = dividend / divisor

  if (r0 > MAX) { return MAX }
  if (r0 < MIN) { return MIN }

  const r2 = Math.floor(r0)
  const r3 = Math.ceil(r0)

  return r0 > 0 ? r2 : r3
};