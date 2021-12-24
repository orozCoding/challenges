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

  addAt(index, value){
    if (index < 0 || index > this.length) {
        return console.log("Please enter a valid index.");
   } else {
        // creates a new node
        var node = new Node(value);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;
 
            // iterate over the list to find
            // the index to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.length++;
    }
  }

  remove(index) {

    // If linked list is empty
    if (this.head == null)
    return;
     
    // Store head node
    let temp = this.head;
     
    // If head needs to be removed
    if (index == 0)
    {      
        // Change head
        this.head = temp.next;
        return;
    }
     
    // Find previous node of the node to be deleted
    for(let i = 0; temp != null && i < index - 1; i++){
        temp = temp.next;
      }
     
    // If index is more than number of nodes
    if (temp == null || temp.next == null){
    return;
    }
     
    // Node temp->next is the node to be deleted
    // Store pointer to the next of node to be deleted
    let next = temp.next.next;
     
    // Unlink the deleted node from list
    temp.next = next;

  }

  print() {
    let current = this.head;
    let counter = 0;
    while (counter < this.length){
      console.log(current.value);
      counter++;
      current = current.next;
    }
  }

}

const newList = new LinkedList();

newList.add(1);
newList.add(5);
newList.add(10);
newList.addAt(0, 25);
newList.remove(1);

console.log(newList.print());