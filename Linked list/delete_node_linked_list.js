// Delete Node in a Linked List
// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]

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

var deleteNode = function (node) {
  node.value = node.next.value;
  node.next = node.next.next;
};

const input1 = [4, 5, 1, 9];

const linkedList = new LinkedList();
let head = linkedList.createLinkedList(input1);
let nodeToDelete = head.next;

deleteNode(nodeToDelete);
console.log(nodeToDelete);
console.log("After deletion:", linkedList.printLinkedList(head));
// Expected: After deletion: [ 4, 1, 9 ]
