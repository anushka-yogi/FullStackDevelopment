// doing repetitive task
// doing things over and over again
// write hello world 20 times
// let i = n -> initialization
// i < n -> condition ( less than , more than , less than equal to )
// i++ -> change(increment decrement)
for (let i = 0; i < 20; i++) {
  console.log("Hello World");
}
// write hello world n times
function printHelloWorld(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello World" + " " + i);
  }
}
printHelloWorld(10);
// reverse loop
for (i = 5; i > 0; i--) {
  console.log("hello world" + " " + i);
}
// call a function inside a loop
function greet(i) {
  console.log("Namastey!" + " " + i);
}
for (let i = 0; i < 10; i++) {
  greet(i);
}
// arrays and loops
let arr = [10, 5, 2, 40, 8, 7];
//calculate the length of array
console.log(arr.length);
// print an array
const length = arr.length;
for (i = 0; i < length; i++) {
  console.log(arr[i]);
}
// print all the even numbers of the array
for (i = 0; i < length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
// print all the even numbers of the array
for (i = 0; i < length; i++) {
  if (arr[i] % 2 == 1) {
    console.log(arr[i]);
  }
}
// while loop
// initialize on top
// while(condition){
// i++(change at last) 
//}
