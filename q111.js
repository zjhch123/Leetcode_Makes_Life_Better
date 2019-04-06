/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  let min = 99999

  if (root === null) {
    return 0
  }

  const dfs = (root, depth) => {
    if (root !== null) {
      depth += 1
    } else {
      return
    }
    
    if (root.left === null && root.right === null) {
      min = Math.min(depth, min)
      return
    }

    if (depth > min) {
      return
    }

    dfs(root.left, depth)
    dfs(root.right, depth)
  }

  dfs(root, 0)

  return min
};