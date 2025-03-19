Input: (start = 2), (end = 5);
// Output: [1, 2, 3, 4, 5];

function rangeOfNumbers(start, end) {
  if (end < start) return [];
  const array = rangeOfNumbers(start, end - 1);
  array.push(end);
  return array;
}

console.log("rangeOfNumbers", rangeOfNumbers(start, end));
