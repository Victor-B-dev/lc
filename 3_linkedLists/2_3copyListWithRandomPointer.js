/* Leetcode # 138 - Copy List with Random Pointer


A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. 
Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

Your code will only be given the head of the original linked list.

 
Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

 

Constraints:
0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.*/

/*The problem with using previous methods of traversing a list are obvious in 2 ways.
If we just follow the next paths, we will not incorporate the random paths.
If we try to incorporate the random paths in the first pass, we will encounter errors if the random pointer points to a node that hasn't been generated yet.

Therefore we need to store both the next & random pointers first. Let's use a hashmap.*/

// Hashmap

var copyRandomListTwoPass = function (head){
  const oldCopy = new Map(); // create hashmap
  oldCopy.set(null, null);

  let current = head;
  while (current){
    const copy = new Node(current.value); // create a copy of the old node
    oldCopy.set(current, copy); // set the value of the key to be the old list's nodes
    current = current.next; // move to next node
  }

  current = head;
  while (current){ // 
    const copy = oldCopy.get(current); // iterate through the copy's nodes
    copy.next = oldCopy.get(current.next); // set the next pointers from the hashmap
    copy.random = oldCopy.get(current.random); // set the random pointers from the hashmap
    current = current.next;
  }

  return oldCopy.get(head);
}

/*  First Pass - First make all nodes without copying any of the pointers.
Store all the nodes in a hashmap.

Second pass - Retrieve them to implement all the pointers. */