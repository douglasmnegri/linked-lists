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

  // Method to return the last node of the list
  listTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  // Method to return the correct index of a specific node
  at(index) {
    if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  // Method to remove the last node of the list
  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      const popNode = this.head;
      this.head = null;
      this.size--;
      return poppedNode;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    const poppedNode = current.next;
    current.next = null;
    this.size--;
    return poppedNode;
  }
  // Method to check if the linked list contains the specific value
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Method that returns the index of the node containing the value
  find(value, index = 0) {
    let current = this.head;
    while (current !== null) {
      index++;
      if (current.value === value) {
        return index;
      }
      current = current.next;
    }
    return false;
  }

  // Method that represents the linked list objects as strings
  toString() {
    let current = this.head;
    let printString = "";
    while (current) {
      printString += `(${current.value}) -> `;
      current = current.next;
    }
    return (printString += current);
  }

  // Method that inserts a node at a determined index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid position");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
  }

  // Method that removes a node at a determined index
  removeAt(index, currentIndex = 0) {
    if (index < 0 || index > this.size) {
      console.log("Invalid position");
      return;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = null;
      let current = this.head;

      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }
      removedNode = current;
      previous.next = current.next;
    }

    this.size--;
    return removedNode;
  }
}

// Example usage
const ll = new LinkedList();
ll.prepend(10); // List is now: 10
ll.append(30); // List is now: 10 -> 30
ll.prepend(5); // List is now: 5 -> 10 -> 30 (Size 3)
ll.insertAt(25, 3); // List is now: 5 -> 10 -> 30 -> 25 (Size 4)
ll.removeAt(1);

// console.log(JSON.stringify(ll, null, 2));
console.log(ll.toString());
