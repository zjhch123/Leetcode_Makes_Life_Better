/**
 * Definition for an interval.
 function Interval(start, end) {
     this.start = start;
     this.end = end;
 }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  const binarySearch = (intervals, value) => {
    let left = 0
    let right = intervals.length - 1

    const end = intervals.length
    const start = 0

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (mid >= end || mid < start) {
        return mid
      }

      if (intervals[mid].start <= value && intervals[mid].end >= value) {
        return mid
      } else if (intervals[mid].start > value) {
        right = mid - 1
      } else if (intervals[mid].end < value) {
        left = mid + 1
      }
    }

    return left
  }

  const insertIndex1 = binarySearch(intervals, newInterval.start)
  const insertIndex2 = binarySearch(intervals, newInterval.end)

  let left = 0
  let right = 0

  if (insertIndex1 === insertIndex2) {
    if (insertIndex1 < intervals.length) {
      if (newInterval.end < intervals[insertIndex1].start) {
        intervals.splice(insertIndex1, 0, newInterval)  
      } else {
        left = Math.min(newInterval.start, intervals[insertIndex1].start)
        right = Math.max(newInterval.end, intervals[insertIndex1].end)
        intervals.splice(insertIndex1, 1, new Interval(left, right))
      }
    } else {
      intervals.splice(insertIndex1, 0, newInterval)
    }
    return intervals
  }

  let deleteStart = insertIndex1
  let deleteEnd = insertIndex2

  if (newInterval.start < intervals[insertIndex1].start) {
    left = newInterval.start
  } else {
    left = intervals[insertIndex1].start
  }

  if (insertIndex2 >= intervals.length) {
    right = newInterval.end
  } else if (newInterval.end < intervals[insertIndex2].start) {
    right = newInterval.end
    deleteEnd -= 1
  } else {
    right = intervals[insertIndex2].end
  }

  intervals.splice(deleteStart, deleteEnd - deleteStart + 1, new Interval(left, right))

  return intervals
};