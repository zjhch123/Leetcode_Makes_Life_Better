/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let index = 0
  let count = 0
  const total = nums.length
  while (count < total) {
    const n = nums[index]
    if (n === 2) {
      nums.splice(index, 1)
      nums.push(2)
      count += 1
      continue
    } else if (n === 0) {
      nums.splice(index, 1)
      nums.unshift(0)
    } 

    index += 1
    count += 1
  }
};

console.log(sortColors([2,0,2,1,1,0]))