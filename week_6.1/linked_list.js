




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
        return true;
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
        return true;
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
        // validating index
        if(index < 0 || index >= this.length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // inserting item at specific index
    // time complexity => O(n)
    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    // inserting node at specific index
    // time complexity => O(n)
    insert(index, value) {
        // validate index
        if(index < 0 || index > this.length) return false;

        // inserting node at the beginning
        if(index === 0) return this.unshift(value);

        // inserting node at the end
        if(index === this.length) return this.push(value);

        // inserting in between
        const newNode = new Node(value);
        let temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    // removing item at specific index
    // time complexity => O(n)
    remove(index) {
        if(index < 0 || index >= this.length) return false;

        // removing from the beginning
        if(index === 0) return this.shift();

        // removing from at the end
        if(index === this.length - 1) return this.pop();

        // remove from in between
        let prevRef = this.get(index-1);
        let temp = prevRef.next;
        prevRef.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // reversing the linked list
    // interview question
    // time complexity => O(n)
    reverse() {
        // swap head to tail, tail to head
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // working with pointer
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

const linkedList = new LinkedList(9);
console.log(linkedList.push(10));
console.log(linkedList.push(11));
// console.log(linkedList.unshift(9));
// console.log(linkedList.shift());
// console.log(linkedList.pop());
// console.log(linkedList.get(1));
// console.log(linkedList.set(2, 50));
// console.log(linkedList.insert(1, 50));
// console.log(linkedList.remove(3))
console.log(linkedList.reverse())
console.log(linkedList);




