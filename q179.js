/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const r = nums.map(a => a.toString()).sort((a, b) => (b + a) - (a + b)).join('');
  return Number(r) === 0 ? '0' : r
};

console.log(largestNumber([999999998,999999997,999999999]))