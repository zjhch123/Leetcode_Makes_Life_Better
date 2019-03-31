/**
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const build = (preorder, inorder) => {
    if (preorder.length === 0) {
      return null
    }

    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)

    if (preorder.length === 1) {
      return root
    }

    const rootIndexInInOrder = inorder.indexOf(rootVal)
    const [ leftInorder, rightInorder ] = [ inorder.slice(0, rootIndexInInOrder), inorder.slice(rootIndexInInOrder + 1) ]
    const [ leftPreorder, rightPreorder ] = [preorder.slice(1, 1 + leftInorder.length), preorder.slice(1 + leftInorder.length) ]

    const left = buildTree(leftPreorder, leftInorder)
    const right = buildTree(rightPreorder, rightInorder)

    if (left !== null) {
      root.left = left
    }

    if (right !== null) {
      root.right = right
    }

    return root
  }

  return build(preorder, inorder)
};
