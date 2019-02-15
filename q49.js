/**
  Given an array of strings, group anagrams together.

  Example:

  Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
  Output:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
  Note:

  All inputs will be in lowercase.
  The order of your output does not matter.

 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const ret = {}
  strs.map(i => i.split('').sort().join(''))
      .forEach((i, j) => typeof ret[i] === 'undefined' ? ret[i] = [strs[j]] : ret[i].push(strs[j]))
      
  return Object.keys(ret).map(key => {
    return ret[key]
  })
};
