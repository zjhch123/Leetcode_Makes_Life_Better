/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const root = new Node(node.val, [])
  const old2NewMap = new Map()
  old2NewMap.set(node, root)

  const createNeighbors = (root, neighbors) => {
    for (let i = 0; i < neighbors.length; i++) {
      let nextRoot = null
      const old = neighbors[i]

      if (old2NewMap.has(old)) {
        nextRoot = old2NewMap.get(old)
      } else {
        nextRoot = new Node(old.val, [])
        old2NewMap.set(old, nextRoot)
        createNeighbors(nextRoot, old.neighbors)
      }

      root.neighbors.push(nextRoot)
    }
  }


  createNeighbors(root, node.neighbors)
  return root
};