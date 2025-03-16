// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Input: head = [1,2]
// Output: [2,1]
// Input: head = []
// Output: []

class CreateNewNode {
  constructor(value, next) {
    this.value = value ?? 0;
    this.next = next ?? null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  createLinkedList(arr = []) {
    if (!arr.length) return null;
    let head = new CreateNewNode(arr[0]);
    let currNode = head;
    for (let index = 1; index < arr.length; index++) {
      currNode.next = new CreateNewNode(arr[index]);
      currNode = currNode.next;
    }
    return head;
  }

  printLinkedList(head) {
    let output = [];
    let current = head;
    if (!head.value) return [];

    while (current !== null) {
      output.push(current.value);
      current = current.next;
    }
    return output;
  }
}

var reverseList = function (head) {
  let prev = null;
  let currentNode = head;
  if (!head) return [];

  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  return prev;
};

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2];
const input3 = [];

const linkedList = new LinkedList();
const list1 = linkedList.createLinkedList(input1);
const list2 = linkedList.createLinkedList(input2);
const list3 = linkedList.createLinkedList(input3);

const output1 = reverseList(list1);
const output2 = reverseList(list2);
const output3 = reverseList(list3);

console.log("Reverse linked list1:", linkedList.printLinkedList(output1));
console.log("Reverse linked list2:", linkedList.printLinkedList(output2));
console.log("Reverse linked list3:", linkedList.printLinkedList(output3));
// This output is converted into readable format
// Reverse linked list1: [ 5, 4, 3, 2, 1 ]
// Reverse linked list2: [ 2, 1 ]
// Reverse linked list3: []
