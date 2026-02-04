let a = 10;
let b = 10;
if (a > b) {
  console.log("a is greater than b");
} else if (a === b) {
  console.log("a is equal to b");
} else {
  console.log("a is less than b");
}
console.clear();
let time = 10;
let greet;
if (time < 10) {
  greet = "good morning";
  console.log(greet);
} else {
  greet = "good night";
  console.log(greet);
}
console.clear();
// switch statement
// switch (expression) {
// case 1 :
// print
// break
// case 2 :
// print
// break
// }
let x = 0;
let text;
switch (x) {
  case 0:
    text = "off";
    console.log(text);
    break;
  case 1:
    text = "on";
    console.log(text);
    break;
  default:
    text = "no value";
    console.log(text);
}
console.clear();
//for loop
let name = "Anushka";
for (let i = 0; i < 5; i++) {
  console.log(`${name}   ${i + 1}`);
}
// while
// do while
let i = 0;
do {
  console.log("hello", i + 1);
  i++;
} while (i < 5);
// logical Operator
// && -> both should be true
// || -> one should be true 
// ! -> if operands is false and vice versa
// number Arrays
// String Arrays