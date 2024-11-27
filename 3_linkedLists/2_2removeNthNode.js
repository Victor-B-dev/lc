/* Leetcode # 19 - Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]


Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

Follow up: Could you do this in one pass? */

// Brute Force - Changing it into an array to be able to get to the correct

var removeNthFromEnd = function(head, n){
  const nodes =[];
  let current = head;
  while (current){
    nodes.push(current)
    current= current.next;
  }

  const removeIndex = nodes.length - n;
  if (removeIndex === 0){  // if we're removing the first node
    return head.next; // we return from the second node
  }

  nodes[removeIndex - 1].next = nodes[removeIndex].next; // otherwise we set the previous node's next to the removed node's next (circumventing it)
  return head;
}

// Iteration (Two Pass)

var removeNthFromEndIterateTP = function (head, n){
  // similar to brute force, no matter what, we need to traverse to the end of the list, we are just doing in place to not need extra space
  let N = 0;
  let current = head;
  while (current) {
    N++;
    current = current.next;
  }

  const removeIndex = N - n; // create a pointer to the index being removed
  if (removeIndex === 0){
    return head.next;
  }

  current = head;
  for (let i = 0; i < N - 1; i++){
    if (i + 1 === removeIndex) { // when we reach the index that will point to the index to be removed
      current.next = current.next.next; // we change its pointer to go to the element after the removeIndex
      break; // then break the loop
    }
    current = current.next; // otherwise we continue traversing the list
  }
  return head;
}

// Two Pass is simple in concept with just understanding how lists operate and the syntax to do what you want it to do.

// Two Pointer (One Pass)
var removeNthFromEndTwoPointers = function (head, n){
  const dummy = new ListNode(0, head); // initialize a new list w/ two pointers to build out of the existingg list 
  let left = dummy; 
  let right = head;

  while (n > 0){ // we move the right pointer n amount of times
    right = right.next;
    n--;
  } // we use the distance between the pointers to keep track of n

  while (right!== null){ // we iterate through the list until the right reaches the end, with left trailing n times
    left = left.next; // therefore left pointer is pointing at the index that needs to be removed
    right = right.next;
  }

  left.next = left.next.next; // we have the left pointer's next go around to index that needs to be removed
  return dummy.next; // return
} 