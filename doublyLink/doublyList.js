class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
const first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
const newVal = first.next;
newVal.next = new Node(14);
newVal.next.prev = first.next;
console.log(first.next);
