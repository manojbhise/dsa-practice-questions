function goToLunch(person) {
  if (person === 5) return person;
  return goToLunch(person + 1);
}

console.log(`Person ${goToLunch(1)} wants to go for lunch.`);
// Expected: Person 5 wants to go for lunch.

function multiply(array) {
  let prod = 1;
  for (let index = 0; index < array.length; index++) {
    prod *= array[index];
  }
  return prod;
}

console.log("multiply", multiply([1, 2, 3, 4]));

function multiplyArr(array) {
  if (!array.length) return 1;
  return (
    array[array.length - 1] * multiplyArr(array.slice(0, array.length - 1))
  );
}

console.log("multiplyArr", multiplyArr([1, 2, 3, 4]));
