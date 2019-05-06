/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (gas === null || gas.length === 0) {
    return 0
  }

  let remain = 0
  let left = 0
  let start = 0

  for (let i = start; i < gas.length; i++) {
    remain += gas[i] - cost[i]

    if (remain < 0) {
      left += remain
      start = i + 1 
      remain = 0
    }
  }
  
  return remain + left >= 0 ? start : -1
};

console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))