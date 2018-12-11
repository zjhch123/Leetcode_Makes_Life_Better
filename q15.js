/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return []
  }
    
  if (nums.length == 3 && nums[0] + nums[1] + nums[2] == 0) { // fuck
    return [
      nums
    ]
  }

  const ret = []

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i]

    if (num1 > 0) {
      return ret
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1

    while (right > left) {
      if (num1 + nums[left] > 0) {
        break
      }

      let addend = num1 + nums[left] + nums[right]

      if (addend == 0) {
        ret.push([num1, nums[left], nums[right]])

        while (nums[left + 1] == nums[left]) {
          left += 1
        }

        while (nums[right - 1] == nums[right]) {
          right -= 1
        }

        left += 1
        right -= 1
        continue
      } else if (addend < 0) {
        left += 1
      } else {
        right -= 1
      }
    }
  }

  return ret
};