/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var getValue = function(str) {
    let res = "";
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      count++;
      if(str[i] != str[i+1]) {
        res = res + count + str[i];
        count = 0;
      }
    }
    return res; 
  }

  var initial = "1";
  
  for(let i = 2; i <= n; i++) {
    initial = getValue(initial);
  }
  return initial;
}