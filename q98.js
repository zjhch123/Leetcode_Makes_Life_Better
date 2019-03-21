/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let prev = null
  
  const travis = (root) => {
    if (root === null) {
      return true
    }

    const flag1 = travis(root.left)

    if (!flag1) {
      return false
    }

    if (prev === null) {
      prev = root.val
    } else {
      if (root.val > prev) {
        prev = root.val
      } else {
        return false
      }
    }

    return travis(root.right)
  }

  return travis(root)
};

