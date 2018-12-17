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
var swapPairs = function(head) {
  if (head == null) { // fuck
    return null
  }
    
  if (head.next == null) { // fuck
    return head
  }

  let ptr = head
  const ret = head.next
  let index = 0
  let prev = null

  while (ptr && ptr.next) {
    if (index % 2 == 0) {
      const next = ptr.next
      if (prev !== null) {
        prev.next = next
      }
      ptr.next = next.next
      next.next = ptr
    } else {
      prev = ptr
      ptr = ptr.next
    }

    index += 1
  }
    
  return ret
};
