/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return []
  }

  const generateBST = (left, right) => {
    const ret = []
    if (left > right) {
      ret.push(new TreeNode(null))
      return ret
    }

    for (let i = left; i <= right; i++) {
      const lefts = generateBST(left, i - 1)
      const rights = generateBST(i + 1, right)

      for (let j = 0; j < lefts.length; j++) {
        for (let k = 0; k < rights.length; k++) {
          const root = new TreeNode(i)
          root.left = lefts[j]
          root.right = rights[k]

          ret.push(root)
        }
      }
    }

    return ret
  }

  return generateBST(1, n)
};