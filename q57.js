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

      if (intervals[mid].start === value) {
        return mid
      } else if (intervals[mid].start > value) {
        right = mid - 1
      } else if (intervals[mid].start < value) {
        left = mid + 1
      }
    }

    return left
  }
  const merge = function(intervals) {
    const ret = []
    let ptr = 0
  
    for (let i = 0; i < intervals.length; i++) {
      if (ret.length === 0) {
        ret.push(intervals[i])
      } else {
        const merged = ret[ptr]
        const interval = intervals[i]
        if (interval.end <= merged.end) {
          continue
        } else {
          if (interval.start > merged.end) {
            ret.push(intervals[i])
            ptr += 1
          } else {
            merged.end = interval.end
          }
        }
      }
    }
  
    return ret
  };

  const insertedIndex = binarySearch(intervals, newInterval.start)

  intervals.splice(insertedIndex, 0, newInterval)

  return merge(intervals)
};