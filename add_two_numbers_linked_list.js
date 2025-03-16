// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

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

var addTwoNumbers = function (l1, l2) {
  let dummy = new CreateNewNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let val1 = l1.value ?? 0;
    let val2 = l2.value ?? 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    current.next = new CreateNewNode(sum);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
const l3 = [0];
const l4 = [0];

const linkedList = new LinkedList();
const list1 = linkedList.createLinkedList(l1);
const list2 = linkedList.createLinkedList(l2);
const list3 = linkedList.createLinkedList(l3);
const list4 = linkedList.createLinkedList(l4);

const output1 = addTwoNumbers(list1, list2);
const output2 = addTwoNumbers(list3, list4);

console.log("Output1:", linkedList.printLinkedList(output1));
console.log("Output2:", linkedList.printLinkedList(output2));
