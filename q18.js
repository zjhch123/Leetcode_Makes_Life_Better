/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length == 4) {
    if (nums.reduce((a, b) => a + b, 0) == target) {
      return [ nums ]
    }
    return []
  }

  nums = nums.sort((a, b) => a - b)
  const length = nums.length
  let ret = []
  let left = 0
  let right = nums.length - 1

  let moveLeft = left + 1
  let moveRight = right - 1

  while(left < length - 3) {
    while (right - left >= 3) {
      while (moveLeft < moveRight) {
        const addend = nums[left] + nums[moveLeft] + nums[moveRight] + nums[right]
  
        if (addend < target) {
          moveLeft = getNextLeft(moveLeft, nums)
        } else if (addend > target) {
          moveRight = getNextRight(moveRight, nums)
        } else {
          ret.push([nums[left], nums[moveLeft], nums[moveRight], nums[right]])
          moveLeft = getNextLeft(moveLeft, nums)
          moveRight = getNextRight(moveRight, nums)
        }
      }
      right = getNextRight(right, nums)
      moveLeft = left + 1
      moveRight = right - 1
    }
    left = getNextLeft(left, nums)
    right = nums.length - 1
    moveLeft = left + 1
    moveRight = right - 1
  }

  return ret
};

const getNextLeft = (nowLeft, nums) => {
  const length = nums.length
  while (nowLeft < length && nums[nowLeft] == nums[nowLeft + 1]) {
    nowLeft += 1
  }
  return ++nowLeft
}

const getNextRight = (nowRight, nums) => {
  while (nowRight >= 0 && nums[nowRight] == nums[nowRight - 1]) {
    nowRight -= 1
  }
  return --nowRight
}
