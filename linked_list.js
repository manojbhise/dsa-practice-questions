class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtFirstLevel(data) {
    // new Node is created at head level
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addAtLastLevel(data) {
    // new Node is created at last level
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }

  size() {
    // Size of Node
    let count = 0;
    let currNode = this.head;
    while (currNode.next) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  addAtCertainLevel(index, data) {
    // Create new Node and add it to certain level
    if (index < 0 || index > this.size()) {
      console.error("Invalid index", index);
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  removeTopNode() {
    // Remove node at top
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLastNode() {
    // remove node at last
    if (!this.head) return;
    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    currNode.next = null;
  }

  removeAtCertainLevel(index) {
    // Remove Node from certain level
    if (index < 0 || index > this.size()) {
      console.error("Invalid index", index);
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currNode = currNode.next;
    }

    if (currNode.next) {
      currNode.next = currNode.next.next;
    }
  }

  printLinkedList() {
    let currNode = this.head;
    while (currNode) {
      console.log("Linked list:", currNode.data);
      currNode = currNode.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.addAtFirstLevel(33);
linkedList.addAtFirstLevel(42);
linkedList.addAtFirstLevel(23);
linkedList.addAtFirstLevel(63);
linkedList.addAtFirstLevel(85);
linkedList.addAtFirstLevel(11);

// linkedList.printLinkedList();
// Expected output:
// 11
// 85
// 63
// 23
// 42
// 33
linkedList.addAtLastLevel(99);
// linkedList.printLinkedList();
// Linked list: 11
// Linked list: 85
// Linked list: 63
// Linked list: 23
// Linked list: 42
// Linked list: 33
// Linked list: 99
// console.log("Size of node is", linkedList.size());
// Size of node is 6
linkedList.removeTopNode();
// Linked list: 85
// Linked list: 63
// Linked list: 23
// Linked list: 42
// Linked list: 33
// Linked list: 99
linkedList.addAtCertainLevel(2, 17);
// Linked list: 85
// Linked list: 63
// Linked list: 17
// Linked list: 23
// Linked list: 42
// Linked list: 33
// Linked list: 99
linkedList.removeAtCertainLevel(3);
// Linked list: 85
// Linked list: 63
// Linked list: 17
// Linked list: 42
// Linked list: 33
// Linked list: 99
linkedList.removeAtCertainLevel(2);
linkedList.removeAtCertainLevel(4);
// Linked list: 85
// Linked list: 63
// Linked list: 42
// Linked list: 33
linkedList.printLinkedList();
