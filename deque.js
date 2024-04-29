const DoublyLinkedList = require('./doubly-linkedlist');

/** Deque: doubly linked list where you can
 *  remove from the front or back or add to the front or back. */
class Deque {
  constructor() {
    this._list = new DoublyLinkedList();
  }

  /** addFront(val): add a value to the front of the deque. Returns undefined. */
  addFront(val) {
    this._list.prepend(val);
    return undefined; // Return undefined as specified
  }

  /** addBack(val): add a value to the back of the deque. Returns undefined. */
  addBack(val) {
    this._list.append(val);
    return undefined; // Return undefined as specified
  }

  /** removeFront(): remove the node from the front of the deque
   * and return its value. Should throw an error if the deque is empty. */
  removeFront() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this._list.removeFirst();
  }

  /** removeBack(): remove the node from the back of the deque
   * and return its value. Should throw an error if the deque is empty. */
  removeBack() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this._list.removeLast();
  }

  /** peekFront(): return the value of the first node in the deque. */
  peekFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this._list.head.val;  }

  /** peekBack(): return the value of the last node in the deque. */
  peekBack() {
    if (this.isEmpty()) {
      return null;
    }
    return this._list.tail.val;  }

  /** isEmpty(): return true if the deque is empty, otherwise false */
  isEmpty() {
    return this._list.isEmpty();
  }
}

module.exports = Deque;
