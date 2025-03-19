function factorial(num) {
  if (num < 1) return 1;
  return num * factorial(num - 1);
}
// 5*4*3*2*1
console.log("factorial", factorial(5));
