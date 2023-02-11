



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
}

const linkedList = new LinkedList(10);
console.log(linkedList)