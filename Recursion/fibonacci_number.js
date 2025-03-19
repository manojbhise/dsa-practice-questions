// Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

let l = 2; // Output: 1;
let m = 3; // Output: 2;
let n = 4; // Output: 3;
let s = 5; // Output: 5; [ 0, 1, 1, 2, 3, 5 ]

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciNew(num) {
  let array = [0, 1];
  for (let index = 2; index <= num; index++) {
    array.push(array[index - 2] + array[index - 1]);
  }
  return array[num];
}

console.log(`Fibonacci number for ${l} is ${fibonacci(l)}`);
console.log(`Fibonacci number for ${m} is ${fibonacci(m)}`);
console.log(`Fibonacci number for ${n} is ${fibonacci(n)}`);
console.log(`Fibonacci number for ${s} is ${fibonacci(s)}`);

console.log(`Fibonacci number new for ${l} is ${fibonacciNew(l)}`);
console.log(`Fibonacci number new for ${m} is ${fibonacciNew(m)}`);
console.log(`Fibonacci number new for ${n} is ${fibonacciNew(n)}`);
console.log(`Fibonacci number new for ${s} is ${fibonacciNew(s)}`);
