// find the second largest number in an array
// first solution
let arr1 = [-5, 15, -4, 14, -3, 93, -2, 72, -Infinity, 11, 0];
function secondLargestTry1(arr) {
  let length = arr.length;
  if (length == 0) return null;
  let x = arr[0];
  let y = arr[1];
  let firstNum;
  let secondNum;
  if (x == y || x > y) {
    firstNum = x;
    secondNum = y;
  } else {
    firstNum = y;
    secondNum = x;
  }
  for (let i = 2; i < length; i++) {
    if (arr[i] > firstNum) {
      secondNum = firstNum;
      firstNum = arr[i];
    } else if (arr[i] > secondNum && arr[i] < firstNum) {
      secondNum = arr[i];
    }
  }
  return secondNum;
}
let result1 = secondLargestTry1(arr1);
console.log(result1);
// second solution
function secondLargestTry2(arr) {
  let length = arr.length;
  if (length < 2 ) return null;
  let firstNum = -Infinity;
  let secondNum = -Infinity;
  for (let i = 0; i < length; i++) {
    if (arr[i] > firstNum) {
      secondNum = firstNum;
      firstNum = arr[i];
    } else if (arr[i] > secondNum && arr[i] != firstNum) {
      secondNum = arr[i];
    }
  }
  return secondNum;
}
let result2 = secondLargestTry2(arr1);
console.log(result2);
