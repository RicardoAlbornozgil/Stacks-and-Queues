const LinkedList = require("./linkedlist");

/** Stack: linked list where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    this._list.prepend(val); // Add to the start of the linked list
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.isEmpty()) {
      throw Error("Stack is empty.");
    }
    return this._list.removeFirst(); // Remove from the start of the linked list
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._list.first.val; // Get the value of the first node
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this._list.isEmpty();
  }
}

module.exports = Stack;
