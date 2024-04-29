/** Node: node for a singly linked list. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: linked list class. */
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** append(val): add a new value to the end of the list. Returns undefined. */
    append(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    /** prepend(val): add a new value to the start of the list. Returns undefined. */
    prepend(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }

    /** remove(val): remove the first occurrence of a value from the list.
     * Returns the removed value, or undefined if the value is not found. */
    remove(val) {
        if (!this.first) {
            return undefined;
        }
        let removedVal;
        if (this.first.val === val) {
            removedVal = this.first.val;
            this.first = this.first.next;
            if (!this.first) {
                this.last = null;
            }
            this.size--;
            return removedVal;
        }
        let currentNode = this.first;
        while (currentNode.next) {
            if (currentNode.next.val === val) {
                removedVal = currentNode.next.val;
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) {
                    this.last = currentNode;
                }
                this.size--;
                return removedVal;
            }
            currentNode = currentNode.next;
        }
        return undefined;
    }

    /** removeFirst(): remove the first node from the list and return its value. */
    removeFirst() {
        if (!this.first) {
            return undefined;
        }
        const removedVal = this.first.val;
        this.first = this.first.next;
        this.size--;
        if (!this.first) {
            this.last = null;
        }
        return removedVal;
    }

    /** removeLast(): remove and return the value of the last node in the list. */
    removeLast() {
        if (!this.first) {
            return undefined;
        }
        let removedVal;
        if (this.size === 1) {
            removedVal = this.first.val;
            this.first = null;
            this.last = null;
            this.size = 0;
            return removedVal;
        }
        let currentNode = this.first;
        while (currentNode.next !== this.last) {
            currentNode = currentNode.next;
        }
        removedVal = this.last.val;
        currentNode.next = null;
        this.last = currentNode;
        this.size--;
        return removedVal;
    }

    /** getLast(): return the value of the last node in the list. */
    getLast() {
        if (!this.last) {
            return undefined;
        }
        return this.last.val;
    }

    /** find(val): find the first occurrence of a value in the list.
     * Returns true if the value is found, false otherwise. */
    find(val) {
        let currentNode = this.first;
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
        let currentNode = this.first;
        while (currentNode) {
            elements.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

module.exports = LinkedList;
