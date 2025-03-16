// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Input: head = [1,2,2,1]
// Output: true
// Input: head = [1,2]
// Output: false

class Node {
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
    let head = new Node(arr[0]);
    let currNode = head;
    for (let index = 1; index < arr.length; index++) {
      currNode.next = new Node(arr[index]);
      currNode = currNode.next;
    }
    return head;
  }
}

var isPalindrome = function (head) {
  let str1 = "";
  let str2 = "";
  let node = head;

  while (node !== null) {
    str1 = str1 + node.value;
    str2 = node.value + str2;
    node = node.next;
  }
  return str1 === str2;
};

const input1 = [1, 2, 2, 1];
const input2 = [1, 2];

const linkedList = new LinkedList();
const list1 = linkedList.createLinkedList(input1);
const list2 = linkedList.createLinkedList(input2);

const output1 = isPalindrome(list1);
const output2 = isPalindrome(list2);

console.log("IsPalindrome:", output1);
console.log("IsPalindrome:", output2);
