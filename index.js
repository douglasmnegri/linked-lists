const { LinkedList, Node } = require("./linkedLists");

// Example usage
const ll = new LinkedList();
ll.prepend(10); // List is now: 10 -> null
ll.append(30); // List is now: 10 -> 30 -> null
ll.prepend(5); // List is now: 5 -> 10 -> 30 -> null
ll.append(50); // List is now: 5 -> 10 -> 30 -> 50 -> null
ll.append(100); // List is now: 5 -> 10 -> 30 -> 50 -> 100 -> null

ll.listSize(); // Returns the list size (Size 5)
ll.listHead(); // Returns the list head (5)
ll.listTail(); // Returns the list tail (100)
ll.at(1); // Returns the node of the specific index (10)


ll.contains(30) // Check if there's a node with the passed value (True)
ll.find(50) // Returns the index of the passed value (Index 3)
ll.toString() // Representation of the linked list objects as strings

ll.pop(); // Pops the last list's node. List is now: 5 -> 10 -> 30 -> 50 -> null
ll.insertAt(250, 1) // Adds a new node in a determined index. List is now: 5 -> 250 -> 10 -> 30 -> 50 -> null
ll.removeAt(3) // Removes a node at a specific index. List is now: 5 -> 250 -> 10 -> 50 -> null
