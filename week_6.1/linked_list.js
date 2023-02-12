




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
    // time complexity => O(1)
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

    // adding node at the beginning
    // time complexity => O(1)
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // const temp = this.head;
            // this.head = newNode;
            // this.head.next = temp;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // remove from the beginning
    // time complexity O(1)
    shift() {
        if(!this.head) return null;

        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        temp.next = null;

        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // removing item at the end
    // time complexity => O(n)
    /*

                   pre
        10--> 11--> 12--> 13--> null
                         temp

    */
    pop() {
        if(!this.head) return null;

        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    // find item at specific index
    // time complexity => O(n)
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
}

const linkedList = new LinkedList(10);
console.log(linkedList.push(11))
console.log(linkedList.unshift(9))
// console.log(linkedList.shift());
// console.log(linkedList.pop());
console.log(linkedList.get(1))
console.log(linkedList)




