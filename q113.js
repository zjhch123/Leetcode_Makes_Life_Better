/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ret = []

  if (root === null) {
    return ret
  }

  const dfs = (root, nowArray, nowSum) => {
    if (root.left === null && root.right === null) {
      if (nowSum + root.val === sum) {
        ret.push([ ...nowArray.slice(0), root.val ])
      }
      return
    }

    nowSum += root.val
    nowArray.push(root.val)

    root.left && dfs(root.left, nowArray, nowSum)
    root.right && dfs(root.right, nowArray, nowSum)

    nowSum -= root.val
    nowArray.length -= 1
  }

  dfs(root, [], 0)
  return ret
};