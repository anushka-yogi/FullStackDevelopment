// solution 1
let isPalindrome1 = function (x) {
  if (x >= 0 && x < 10) return true;
  if (x < 0) return false;
  let array = [];
  let index = 0;
  while (x > 0) {
    array[index] = x % 10;
    x = Math.floor(x / 10);
    index = index + 1;
  }
  let length = array.length;
  let firstIndex = 0;
  let lastIndex = length - 1;
  while (firstIndex < lastIndex) {
    if (array[firstIndex] !== array[lastIndex]) {
      return false;
    }
    firstIndex = firstIndex + 1;
    lastIndex = lastIndex - 1;
  }
  return true;
};
// solution 2 
let isPalindrome2 = function (x) {
  if (x >= 0 && x < 10) return true;
  if (x < 0) return false;
  let reverse = 0 ;
  let num = x ; 
  while (x > 0) {
    let remainder = x % 10 ;
    reverse = reverse * 10 + remainder ;
    x = Math.floor(x / 10);
  }
  if ( reverse !== num ){
    return false ;
  }
  return true ;
};
let num = 121;
let result1 = isPalindrome1(num);
console.log(result1);
let result2 = isPalindrome2(num);
console.log(result2);

