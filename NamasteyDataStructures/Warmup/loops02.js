// search an element
// write the function that searches for the element in an array and returns the element and if element is not in array return -1
let arr = [1, 2, 3, 4, 5, 6];
function searchElement(arr, number) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] == number) {
      return i;
    }
  }
  return -1;
}
let result = searchElement(arr, 9);
console.log(result);
// write a function that returns the total count of negative numbers in an array
let arr1 = [-5, 15, -4, 14, -3, 93, -2, 72, -Infinity, 11, 0];
function countNegativeElements(arr) {
  const length = arr.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}
let result1 = countNegativeElements(arr1);
console.log(result1);
// write a function that return the largest number in an array
function largestNumber(arr) {
  const length = arr.length;
  if (length == 0) return -1;
  let largest = arr[0];
  // infinity and -infinity in js
  // largest can alse be -infinity initially.
  for (let i = 1; i < length; i++) {
    if (arr[i] >= largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let result2 = largestNumber(arr1);
console.log(result2);
// write a function that return the smallest number in an array
function smallestNumber(arr) {
  const length = arr.length;
  if (length == 0) return -1;
  let smallest = arr[0];
  // infinity and -infinity in js
  // largest can alse be -infinity initially.
  for (let i = 1; i < length; i++) {
    if (arr[i] <= smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let result3 = smallestNumber(arr1);
console.log(result3);
