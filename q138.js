/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
    return null
  }
  const nHead = new Node(head.val, null, null)
  const nodeToId = new Map()
  const idToNode = new Map()

  let ptr = head
  let nPtr = nHead
  let index = 0

  nodeToId.set(head, index)
  idToNode.set(index, nHead)

  while (ptr.next !== null) {
    index += 1
    ptr = ptr.next

    nPtr.next = new Node(ptr.val, null, null)
    nodeToId.set(ptr, index)

    nPtr = nPtr.next
    idToNode.set(index, nPtr)
  }

  ptr = head
  nPtr = nHead

  for (let i = 0; i <= index; i++) {
    if (ptr.random !== null) {
      nPtr.random = idToNode.get(nodeToId.get(ptr.random))
    }
    ptr = ptr.next
    nPtr = nPtr.next
  }

  return nHead
};