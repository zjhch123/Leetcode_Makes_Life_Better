/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length
  const mid = Math.floor(totalLength / 2)

  const l1Length = nums1.length
  const l2Length = nums2.length

  let nums1Index = 0
  let nums2Index = 0
  let index = 0

  const ret = []

  while (index <= mid) {
    let n1 = nums1Index >= l1Length ? 99999999 : nums1[nums1Index]
    let n2 = nums2Index >= l2Length ? 99999999 : nums2[nums2Index]

    if (n1 < n2) {
      ret.push(n1)
      nums1Index ++
    } else {
      ret.push(n2)
      nums2Index ++
    }

    index++
  }

  if (totalLength % 2 == 0) {
    return (ret[mid - 1] + ret[mid]) / 2
  } else {
    return ret[mid]
  }
};