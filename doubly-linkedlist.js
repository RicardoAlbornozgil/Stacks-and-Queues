/** DoublyNode: node for a doubly linked list. */
class DoublyNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  /** DoublyLinkedList: doubly linked list class. */
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    /** append(val): add a new value to the end of the list. Returns undefined. */
    append(val) {
      const newNode = new DoublyNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    /** prepend(val): add a new value to the start of the list. Returns undefined. */
    prepend(val) {
      const newNode = new DoublyNode(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    /** remove(val): remove the first occurrence of a value from the list.
     * Returns the removed value, or undefined if the value is not found. */
    remove(val) {
      if (!this.head) {
        return undefined;
      }
      let removedVal;
      if (this.head.val === val) {
        removedVal = this.head.val;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.size--;
        return removedVal;
      }
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.val === val) {
          removedVal = currentNode.val;
          if (currentNode === this.tail) {
            this.tail = currentNode.prev;
            this.tail.next = null;
          } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
          }
          this.size--;
          return removedVal;
        }
        currentNode = currentNode.next;
      }
      return undefined;
    }

     /** removeFirst(): remove and return the value of the first node in the list. */
  removeFirst() {
    if (!this.head) {
      return undefined;
    }
    const removedVal = this.head.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removedVal;
  }

  /** removeLast(): remove and return the value of the last node in the list. */
  removeLast() {
    if (!this.tail) {
      return undefined;
    }
    const removedVal = this.tail.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return removedVal;
  }
  
    /** find(val): find the first occurrence of a value in the list.
     * Returns true if the value is found, false otherwise. */
    find(val) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.val === val) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  
    /** isEmpty(): return true if the list is empty, otherwise false */
    isEmpty() {
      return this.size === 0;
    }
  
    /** sizeOf(): return the size of the list */
    sizeOf() {
      return this.size;
    }
  
    /** print(): return an array containing all elements of the list */
    print() {
      const elements = [];
      let currentNode = this.head;
      while (currentNode) {
        elements.push(currentNode.val);
        currentNode = currentNode.next;
      }
      return elements;
    }
  }
  
  module.exports = DoublyLinkedList;