/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * 总区间数 - 最多不重叠区间数
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
    return 0
  }

  intervals.sort((a, b) => a.end - b.end)
    

  let count = 1
  let end = intervals[0].end

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i].start >= end) {
      count += 1
      end = intervals[i].end
    }
  }

  return intervals.length - count
};