// write a function which returns the count of digits in a number
function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
}
let num = 4200;
let result = countDigits(num);
console.log(result);
// Math.floor -> rounds up to lower value
// Math.ceil -> rounds up to higher value
// Math.round -> rounds up according to decimal value i.e .1 to .4 will be rounded up to lower value and .5 to .9 will be rounded up to higher value
// Math.abs -> converts the negative value to positive (absolute)
