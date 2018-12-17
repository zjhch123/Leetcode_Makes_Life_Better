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
var reverseKGroup = function(head, k) {
  if (!head) { return head }

  let ptr = head
  let arr = []
  let ret = null
  let tail = null

  while (ptr) {
    for (let i = 0; i < k; i++) {
      if (ptr) {
        arr.push(ptr)
        ptr = ptr.next
      } else {
        break
      }
    }

    if (arr.length === k) {
      arr.reverse()
    }

    for (let i = 0; i < arr.length; i++) {
      if (!ret) {
        ret = arr[i]
        tail = arr[i]
      } else {
        tail.next = arr[i]
        tail = tail.next
      }
    }

    arr.length = 0
  }

  tail.next = null
  
  return ret
};