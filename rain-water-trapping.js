const height = [0,1,0,2,1,0,1,3,2,1,2,1,1];
// Expected output is 6
// const height = [4, 2, 0, 3, 2, 5];
// Expected output is 9
let waterTrapped = 0;
const len = height.length;
for (let i = 0; i < len; i++) {
  let isAnyBigNum = false;
  const currNum = height[i];
  const nextNum = height[i + 1];
  for (let j = i + 1; j < len; j++) {
    const nextBig = height[j];
    if (nextBig >= currNum) {
      isAnyBigNum = true;
      break;
    }
  }
  if (currNum > nextNum && isAnyBigNum) {
    let currIndex;
    for (let k = i + 1; k < len; k++) {
      const nextNumber = height[k];
      if (currNum >= nextNumber) {
        currIndex = k;
        waterTrapped += currNum - nextNumber;
      } else break;
      if (currNum === nextNumber) break;
    }
    if (currIndex) {
      i = currIndex;
    }
  }
}

console.log("Water trapped is", waterTrapped);
