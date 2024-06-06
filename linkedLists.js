class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method to insert a node at the beginning of the list
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  // Method to insert a node at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method to return the size of the linked list
  listSize() {
    return this.size;
  }

  // Method to return the first node of the list
  listHead() {
    return this.head;
  }

  listTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
}

// Example usage
const ll = new LinkedList();
ll.prepend(10); // List is now: 10
ll.append(30); // List is now: 10 -> 30
ll.prepend(5); // List is nowL 5 -> 10 -> 30 (Size 3)
ll.listTail();

console.log(JSON.stringify(ll, null, 2));

console.log(ll.listTail());
