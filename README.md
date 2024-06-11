# Linked Lists Project

This project demonstrates the implementation and usage of a linked list data structure in JavaScript. The project consists of two main files: `linkedLists.js` and `index.js`.

## Files

### `linkedLists.js`
This file contains the implementation of the linked list data structure. It includes the following classes and methods:

- **Node Class**: Represents a node in the linked list.
  - ***constructor(value, next)***: Initializes a new node with the given value and optional reference to the next node.
- **LinkedList Class**: Implements the linked list with the following methods:
  - ***prepend(value)***: Inserts a new node with the given value at the beginning of the list.
  - ***append(value)***: Inserts a new node with the given value at the end of the list.
  - ***listSize()***: Returns the size of the linked list.
  - ***listHead()***: Returns the first node of the list.
  - ***listTail()***: Returns the last node of the list.
  - ***at(index)***: Returns the node at the specified index.
  - ***pop()***: Removes and returns the last node of the list.
  - ***contains(value)***: Checks if the linked list contains a node with the specified value.
  - ***find(value)***: Returns the index of the first occurrence of a node with the specified value.
  - ***toString()***: Returns a string representation of the linked list.
  - ***insertAt(value, index)***: Inserts a new node with the given value at the specified index.
  - ***removeAt(index)***: Removes the node at the specified index from the list.

### `index.js`
This file includes example usage of the `LinkedList` class to demonstrate its functionality. You can run this file to see how the linked list operations work.

## Usage

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.

### Running the Code

To run the code, use Node.js. Ensure you have Node.js installed on your system.

#### Example

1. Open a terminal and navigate to the project directory.
2. Run the following command:

```sh
node index.js
