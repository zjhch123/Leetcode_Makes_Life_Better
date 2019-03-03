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
  if (head === null || head.next === null) {
    return head
  }

  while (head.next !== null && head.val === head.next.val) {
    head = head.next
  }

  let prev = head.next
  let ptr = prev

  while (prev !== null) {
    while (ptr.next !== null && ptr.val === ptr.next.val) {
      ptr = ptr.next
    }

    prev.next = ptr.next
    prev = prev.next
    ptr = prev
  }

  return head
};