/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a.start - b.start)
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