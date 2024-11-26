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

var hasCycle = function(head){
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
It comes in a lot of of names -- and logically you can probably come up with it yourself.
*/

// Fast/Slow Pointers - Tortoise and Hare Algorithm - Floyd's Cycle Finding Algorithm

var hasCycleTH = function(head){
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

/* The basic premise of the algorithm is basically that the fast pointer will eventually catch up to the slow pointer if there's a cycle. 
It doesn't matter how many steps there are between the fast and the slow, because so long as the fast is moving faster than the slow, step by step, it will reach the slow pointer since the presence of a cycle means the slow one will go on indefinitely.

If there isn't a cycle -- we don't care when the slow reaches the end, we only care about the fast pointer since that will dictate the cycle existence.

If the fast pointer reaches a null, then there's no cycle. But if it doesn't reach a null && it reaches the slow pointer, then there's a cycle. (We don't want the fast pointer to early return if it reaches the slow early either.)

Hence the while loop that it runs until it && its next reaches a null.
*/