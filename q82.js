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
var deleteDuplicates = function(head) {
  const findNextSingleElement = (ptr) => {
    let val = null
    let pos = null
    while (ptr !== null && ptr.next !== null && ptr.next.val === ptr.val) {
      val = ptr.val
      pos = ptr

      while (pos.next !== null && pos.next.val === val) {
        pos = pos.next
      }
      ptr = pos.next
    }

    return ptr
  }

  head = findNextSingleElement(head)
  
  let prev = head

  while (prev !== null && prev.next !== null) {
    const next = findNextSingleElement(prev.next)
    prev.next = next
    prev = next
  }

  return head
};