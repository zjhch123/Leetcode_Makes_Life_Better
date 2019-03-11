/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return head;
    let small = {};
    let smallHead = small;
    let large = {};
    let largeHead = large;
    let root = head;
    
    while (root) {
      if (root.val < x) {
        small.next = new ListNode(root.val);
        small = small.next;
      } else {
        large.next = new ListNode(root.val);
        large = large.next;
      }
      root = root.next;
    }
    
    small.next = largeHead.next;
    
    return smallHead.next;
  };