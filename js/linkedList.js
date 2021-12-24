class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  add(value) {
    this.length++;
    let newNode = new Node(value);
  
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }
  
    this.head = this.tail = newNode;
    return newNode;
  }

  get(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count += 1;
    }
    return current.value;
    
  }

}