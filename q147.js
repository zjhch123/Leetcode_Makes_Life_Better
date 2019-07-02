/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (head === null ||head.next === null) {
    return head
  }

  let rHead = head
  let rTail = head
  let compare = head.next

  rTail.next = null

  while (compare !== null) {
    const next = compare.next

    if (compare.val <= rHead.val) {
      compare.next = rHead
      rHead = compare
      compare = next
      continue
    } else if (compare.val >= rTail.val) {
      rTail.next = compare
      compare.next = null
      rTail = compare
      compare = next
      continue
    }

    let prev = rHead
    let ptr = prev.next

    while (ptr !== null) {
      if (compare.val >= prev.val && compare.val <= ptr.val) {
        prev.next = compare
        compare.next = ptr
        compare = next
        break
      }

      prev = ptr
      ptr = ptr.next
    }
  }

  return rHead
};