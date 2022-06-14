let stack = [];
class Node {
  costructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  costructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

stack.push(23);
stack.push(24);
stack.push(51);
stack.push(32);
stack.push(22);
stack.pop();
console.log(stack);
