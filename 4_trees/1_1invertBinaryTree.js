/* 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]

Example 2:
Input: root = [3,2,1]
Output: [3,1,2]

Better to go to leetcode proper to see the image but it's basically being mirrored horizontally.
*/

// BFS Solution - stack solution

var invertTree = function(root) {
  if (root == null) return null; // base case
  
  const stack = [root];

  while (stack.length > 0) {
    let node = stack.shift();

    [node.left, node.right] = [node.right, node.left]; // destructure swap
    if (node.left != null) stack.push(node.left); // stack left node if it has children
    if (node.right != null) stack.push(node.right); // also stack
  }

  return root;
};

// DFS solution - recursive call

var invertTreeDFS = function(root) {
  if (root === null) return null;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// DFS solution - iterative

var invertTreeDFS2 = function(root) {
  if (!root) return null;

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();

    [node.left, node.right] = [node.right, node.left];
    
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  
  return root;
};

