



// time complexity => O(1)
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const node = new Node(10);
// console.log(node)

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }

    // adding node at the end of the linked list
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

const linkedList = new LinkedList(10);
console.log(linkedList.push(11))
console.log(linkedList)

