// Leetcode # 155 - min stack
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.
*/

/* Lets discuss a bit before we look at the actual solution.
By default push/pop/top(or peek) are O(1) operations.
finding the minimum value in stack however is not.

In effect, the push/pop/top methods would be very simple (e.g. this.stack.pop()) when implementing it in the brute force/basic variation of a solution.
With the main problem being how do we obtain the minimum.

However if we want to make the minvalue grab an O(1) operation we need to basically always be processing the information (what is the minimum value every time we add to the stack), thus making each of the previous methods more complicated.

With that in mind, after our arrays/hashing exercises, we know we can store things (relational data) together with objects/arrays. As such when we push a value onto the stack, we will also store the data for the current lowest minimum value with that concurrent number. This way no matter what we push/pop, we dont need to traverse the whole stack for the information.

*/

// Solution - one stack - store values as [value, minimum value at this position]
class MinStack1 {
  constructor() {
    this.stack = []; // Initialize the stack as an empty array
  }

  // Push a value onto the stack
  push(val) {
    let minVal = this.getMin(); // store the current minimum as a comparison value
    if (minVal === null || minVal > val) {
      minVal = val; // Update the minimum value if necessary
    }
    this.stack.push([val, minVal]); // Push both the value and the (potentially new) current minimum onto the stack
  }

    // Pop the top value from the stack
  pop() {
    this.stack.pop();
  }

  // Return the top value from the stack
  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1][0]; // Return the value (not the minimum) - specifically the end of the array
    } else {
      return null; // Return null if the stack is empty
    }
  }

  // Return the current minimum value in the stack
  getMin() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1][1]; // Return the minimum value from the last item in the stack
    } else {
      return null; // Return null if the stack is empty
    }
  }
}

/* If you didn't want to do this variation of the answer, you could have two arrays intialized, one for the regular values and the minimum values stored in the other.
*/

// Variant Solution - Two Stack

class MinStackTwoStacks {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    val = Math.min(
      val,
      this.minStack.length === 0
        ? val // if Minstack doesn't exist, set the minstack to the value
        : this.minStack[this.minStack.length - 1], // otherwise do a comparison from the latest minimum value
    );
    this.minStack.push(val); // push the new minimum onto the minStack
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }


  top() {
      return this.stack[this.stack.length - 1];
  }


  getMin() {
      return this.minStack[this.minStack.length - 1];
  }
}


// There is another one stack solution but I think it's confusing to read. It's cleverly tracking the difference between the current value and the minimum. I am including it here but I would not really remember how to implement this off the top of my head.

class MinStackLargeBrain {
  constructor() {
    this.min = Infinity;
    this.stack = [];
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
    } else {
      this.stack.push(val - this.min);
      if (val < this.min) this.min = val;
    }
  }

  pop() {
    if (this.stack.length === 0) return;

    const pop = this.stack.pop();

    if (pop < 0) this.min -= pop;
  }


  top() {
    const top = this.stack[this.stack.length - 1];
    return top > 0 ? top + this.min : this.min;
  }


  getMin() {
    return this.min;
  }
}