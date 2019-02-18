/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  const bubble = new Map()

  for (let key of map.keys()) {
    const count = map.get(key)
    if (bubble.has(count)) {
      bubble.get(count).push(key)
    } else {
      bubble.set(count, [key])
    }
  }

  const keys = Array.from(bubble.keys())

  keys.sort((a, b) => b - a)

  const ret = keys.map(i => bubble.get(i)).reduce((a, b) => a = [ ...a, ...b ], [])

  return ret.slice(0, k)
};

console.log(topKFrequent([1,1,1,2,2,3], 2))