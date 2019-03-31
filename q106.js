/**
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const build = (inorder, postorder) => {
    if (inorder.length === 0) {
      return null
    }

    const rootVal = postorder[postorder.length - 1]
    const root = new TreeNode(rootVal)

    const rootIndexInInorder = inorder.indexOf(rootVal)
    const [ leftInorder, rightInorder ] = [ inorder.slice(0, rootIndexInInorder), inorder.slice(rootIndexInInorder + 1) ]
    const [ leftPostorder, rightPostorder ] = [ postorder.slice(0, leftInorder.length), postorder.slice(leftInorder.length, leftInorder.length + rightInorder.length) ]

    const left = buildTree(leftInorder, leftPostorder)
    const right = buildTree(rightInorder, rightPostorder)

    if (left !== null) {
      root.left = left
    }

    if (right !== null) {
      root.right = right
    }

    return root
  }

  return build(inorder, postorder)
};
