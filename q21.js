/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode(null)
  let node = head
  let nn = null

  while(true) {
    if (l1 == null) {
      nn = l2
      break
    }
    if (l2 == null) {
      nn = l1
      break
    }

    if (l1.val > l2.val) {
      node.next = new ListNode(l2.val)
      l2 = l2.next
    } else {
      node.next = new ListNode(l1.val)
      l1 = l1.next
    }
    node = node.next
  }

  while(nn) {
     node.next = new ListNode(nn.val)
     node = node.next
     nn = nn.next
  }

  return head.next
};