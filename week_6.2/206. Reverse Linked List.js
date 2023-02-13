// Difficulty Level => Easy
// https://leetcode.com/problems/reverse-linked-list/


var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// console.log(reverseList())








