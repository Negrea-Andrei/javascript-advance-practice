//!Data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. More precisely, 
//!a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data

/*Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks.*/

/*Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. 
Usually, efficient data structures are key to designing efficient algorithms. 
Some formal design methods and programming languages emphasize data structures, rather than algorithms, as the key organizing factor in software design. 
Data structures can be used to organize the storage and retrieval of information stored in both main memory and secondary memory*/

//*Example of data structures:
/*
1)Array is a number of elements in a specific order, typically all of the same type 
(depending on the language, individual elements may either all be forced to be the same type, or may be of almost any type). 
Elements are accessed using an integer index to specify which element is required

2)Linked list (also just called list) is a linear collection of data elements of any type, 
called nodes, where each node has itself a value, and points to the next node in the linked list. 
The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list.

3)Record (also called tuple or struct) is an aggregate data structure. 
A record is a value that contains other values, typically in fixed number and sequence and typically indexed by names. 
The elements of records are usually called fields or members. In the context of object-oriented programming, records are 
known as plain old data structures to distinguish them from objects

4)Hash tables, also known as hash maps, are data structures that provide fast retrieval of values based on keys. 
They use a hashing function to map keys to indexes in an array, allowing for constant-time access in the average case. 
Hash tables are commonly used in dictionaries, caches, and database indexing. However, hash collisions can occur, which can impact their performance. 
Techniques like chaining and open addressing are employed to handle collisions.

5)Graphs are collections of nodes connected by edges, representing relationships between entities. Graphs can be used to model social networks, 
computer networks, and transportation networks, among other things. They consist of vertices (nodes) and edges (connections between nodes). 
Graphs can be directed or undirected, and they can have cycles or be acyclic. Graph traversal algorithms include breadth-first search and depth-first search.

6)Stacks and queues are abstract data types that can be implemented using arrays or linked lists. 
A stack has two primary operations: push (adds an element to the top of the stack) and pop (removes the topmost element from the stack), 
that follow the Last In, First Out (LIFO) principle. Queues have two main operations: enqueue (adds an element to the rear of the queue) and dequeue 
(removes an element from the front of the queue) that follow the First In, First Out (FIFO) principle.

7)Trees represent a hierarchical organization of elements. 
A tree consists of nodes connected by edges, with one node being the root and all other nodes forming subtrees. 
Trees are widely used in various algorithms and data storage scenarios. Binary trees (particularly heaps), 
AVL trees, and B-trees are some popular types of trees. They enable efficient searching, sorting, and hierarchical representation of data.*/

//?EXAMPLE
// Define the Node class that represents a single element in the linked list
class Node {
  constructor(data) {
    this.data = data; // Store the data of the node
    this.next = null; // Reference to the next node (initialized to null)
  }
}

// Define the LinkedList class that manages the linked list
class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the list to null (empty list)
  }

  // Method to append a new node with given data to the end of the linked list
  append(data) {
    const newNode = new Node(data); // Create a new node with the given data

    if (!this.head) {
      // If the list is empty, make the new node the head of the list
      this.head = newNode;
      return;
    }

    let current = this.head; // Start from the head of the list
    while (current.next) {
      current = current.next; // Traverse to the last node in the list
    }
    current.next = newNode; // Set the new node as the next node of the last node
  }

  // Method to display the data of all nodes in the linked list
  display() {
    let current = this.head; // Start from the head of the list
    while (current) {
      console.log(current.data); // Print the data of the current node
      current = current.next;    // Move to the next node
    }
  }
}

// Create a new instance of the LinkedList class
const myList = new LinkedList();

// Append nodes with data 10, 20, and 30 to the linked list
myList.append(10);
myList.append(20);
myList.append(30);

// Display the data of all nodes in the linked list
myList.display();

  //!Algorithms
/*Instead, the word algorithm is used to describe the “step-by-step” approach where there is exactly one correct next step.
In an algorithm, given the current phase of the process and the steps that are outlined, there is one single, correct way to proceed.*/

/*1) Linear Search Algorithm:
The simplest way to find his number would be to look through every single entry and compare it to the name you’re looking for (go trough etch element and check if is ok or not)*/

/*2) Chunking Search Algorithm:
The process of chunking involves first finding the general area where an entry would be, then proceeding to check every entry. 
(basically go to an area where the data might be an start checking form there)*/

/*3) Binary Search Algorithm:
The most efficient way to find a person in the phone book is to metaphorically split the phone book in half, 
determine which half of the phone book the entry is in, quickly removing the entire other half from the equation.
(given a data structure, whe start splitting the data and checking for comparisons. If the data is bigger, we go right,
  if its smaller we go left)*/

  //*Binary tree traversal
