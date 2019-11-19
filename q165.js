/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const version1Arr = version1.split('.').map(n => Number(n));
  const version2Arr = version2.split('.').map(n => Number(n));

  const count = Math.max(version1Arr.length, version2Arr.length);
  let index = 0;

  while(index < count) {
    const n1 = version1Arr[index] || 0;
    const n2 = version2Arr[index] || 0;
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    } else {
      index += 1;
    }
  }

  return 0;
};

console.log(compareVersion("1.0001000000000.0.0.0.0.0.0.0.01", "1.0001000.0.0.0.0.0.0.0.01"))