/*Leetcode #  -141 Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

// Hashset - Non Optimal

var hasCycle = function (head){
  let visited = new Set(); // create a set - a structure that doesn't allow duplicates - fast O(1) retrieval
  let current = head;

  while (current){ // iterater through the list
    if (visited.has(current)){ // if the node has previously been visited
      return true; // early exit
    }
    visited.add(current); // add the node to the set
    current = current.next; // move the pointer to the next node
  }

  return false;
}

/* As suggested in the constraint/followup, a hashset is a naive solution because it requires additional memory to compute.
There is a better way that doesn't involve extra memory and likely you've already encountered it.
*/

// Fast/Slow Pointers -Tortoise and Hare Algorithm - Floyud's Cycle Finding Algorithm