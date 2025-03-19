// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and
// return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1,2], n = 1
// Output: [1]

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

var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, 2];

const linkedList = new LinkedList();
const list1 = linkedList.createLinkedList(input1);
const list2 = linkedList.createLinkedList(input2);

const output1 = removeNthFromEnd(list1, 2);
const output2 = removeNthFromEnd(list2, 1);

console.log("Output1:", linkedList.printLinkedList(output1));
console.log("Output2:", linkedList.printLinkedList(output2));
