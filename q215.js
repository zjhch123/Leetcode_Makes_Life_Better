/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const swap = (arr, left, right) => {
    const t = arr[left]
    arr[left] = arr[right]
    arr[right] = t
  }

  const heapify = (arr, index, size) => {
    const left = index * 2 + 1
    const right = index * 2 + 2

    let largest = index

    if (left < size && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < size && arr[right] > arr[largest]) {
      largest = right
    }

    if (largest !== index) {
      swap(arr, index, largest)
      heapify(arr, largest, size)
    }
  }

  let ret = 0
  let size = nums.length

  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(nums, i, size)
  }

  for (let i = 0; i < k; i++) {
    swap(nums, 0, size - 1)
    ret = nums[size - 1]
    size -= 1
    heapify(nums, 0, size)
  }

  return ret
};
