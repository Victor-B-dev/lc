/* Leetcode # 21 - Merge Two Sorted Lists


You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

// Iterative

var mergeTwoLists = function (list1, list2) {
  const dummy = { val:0, next:null }; // create a list object with a starting node (named dummy)
  let node = dummy; // create a new copy 

  while (list1 && list2){ // while both lists still exist
    if (list1.val < list2. val){ // while list1's current node value is less than list2's current node value
      node.next = list1; // have the node's point to list1's current node value
      list1 = list1.next; // update list1's current node to its next position
    } else{ // do the same if list2's current node value is next in line
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next; // shift the current node to the next
  }

  if (list1){ // when list 1 remains, add its remaining nodes
    node.next = list1;
  } else { // otherwise list 2 remains, add its remaining nodes
    node.next = list2;
  }

  return dummy.next;
}

/* This is a simple test of understanding the syntax of linked lists with a following the order required to do what you want.

1. Create a new node for the new list.
2. Do a simple comparison (if else) where you compare the value of the current nodes. (line 38 or 41)
3. Add the lesser value by having the pointer (next) of the list's node (line 39 or 42).
4. Update the respective list's current pointer to the next value in the list.
5. Update the pointer for the node.
6. Repeatedly (loop) steps 2-5 until a list ends.
7. Add the other list's remaining nodes  
7. Return the list

*/