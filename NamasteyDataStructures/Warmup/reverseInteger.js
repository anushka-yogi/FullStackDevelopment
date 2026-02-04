// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21
var reverse = function (x) {
  let sign = Math.sign(x);
  let a = Math.abs(x);
  let reversedNumber = 0;
  while (a > 0) {
    let remainder = a % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    a = Math.floor(a / 10);
  }
  let limit = Math.pow(2,31);
  const result = sign * reversedNumber;
  return (result < -limit || result > limit - 1 ) ? 0 : result
};
console.log(reverse(1234));

// sign
// Math.sign(x)
// Returns the direction of the number:
// 1 for positive
// -1 for negative
// 0 for zero

// abs
// Math.abs(x)
// Returns the magnitude of the number by removing its sign.

//pow
//Math.pow(2,31) -> 2 to the power 31 || 2**31