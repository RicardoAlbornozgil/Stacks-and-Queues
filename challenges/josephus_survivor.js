/**
    Josephus Survivor

    This is a classic algorithm problem, based on a Biblical-era tale.

    Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

    ```
    1  2  3  4  5  6  7  8  9  10
          !        !        !
    ```

    This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

    ```
    1  2  3  4  5  6  7  8  9  10
    !  X        X  !     X
    ```

    And again, starting where that left off, at #8, and continuing:

    ```
    1  2  3  4  5  6  7  8  9  10
    !  X  X        X  X  !  X

    1  2  3  4  5  6  7  8  9  10
    X  X  X     !  X  X  X  X

    1  2  3  4  5  6  7  8  9  10
    X  X  X     X  X  X  X  X  !
    ```

    At this point, only #4 remains, so that person would be our “survivor”.

    Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor.

    For example:

    ```jsx
    find_survivor(10, 3) // 4
    ```

*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    addNode(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode; // Point to itself for circularity
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }
    

    removeNode(prevNode) {
        const removedNode = prevNode.next;
        if (prevNode === removedNode) {
            this.head = null;
        } else {
            prevNode.next = removedNode.next;
            if (removedNode === this.head) {
                this.head = removedNode.next;
            }
        }
        return removedNode.val;
    }
}

function findSurvivor(numPeople, skip) {
    const list = new CircularLinkedList();

    // Create circular linked list with nodes representing each person
    for (let i = 1; i <= numPeople; i++) {
        list.addNode(i);
    }



    let current = list.head;
    while (list.head.next !== list.head) {
        
        // Traverse and remove every nth person
        for (let i = 1; i < skip -1; i++) {
            console.log(`\n${current.val} is skipped.\n`)
            current = current.next;
            console.log(`${current.val} is skipped.\n`)

        }
        const removedVal = list.removeNode(current);
        console.log(`${removedVal} value died.`)
        current = current.next; // Move to the next person after removal
    }

    return list.head.val;
}

// Test case
console.log(`\n${findSurvivor(10, 3)} value survived`); // Output: 4 Survived
