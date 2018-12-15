/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null
  }
  if (lists.length === 1) {
    return lists[0]
  }
  

  while(lists.length > 1) {
    const l1 = lists.shift()
    const l2 = lists.shift()
    lists.push(mergeTwoLists(l1, l2))
  }
  return lists.pop()
};


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
      node.next = l2
      l2 = l2.next
    } else {
      node.next = l1
      l1 = l1.next
    }
    node = node.next
  }

  while(nn) {
     node.next = nn
     node = node.next
     nn = nn.next
  }

  return head.next
};