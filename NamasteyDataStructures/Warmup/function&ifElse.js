// functions inside js
// how to define a function ?
// keyword function followed by name of the function that it is supposed to do() followed by curly {}
// function declaration
function printHelloWorld() {
  console.log("Hello World");
}
// we need to call this fucntion?
// write name of the function and put paranthesis it means i am calling the function
//declaration of a function
printHelloWorld();
// making a function dynamic => paas a value / arguments
function greet(name) {
  console.log("Namastey," + " " + name);
}
greet("Anushka");
greet("Vikram");
// create a function that can add 2 values and print it onto the console
function add(a, b) {
  let add = a + b;
  console.log(add);
}
add(7, 10);
// create a function that can multiply 2 values and print it onto the console
function multiply(a, b) {
  let multiply = a * b;
  console.log(multiply);
}
let a = 1;
let b = 2;
let c = 3;
multiply(7, 10);
multiply(a, b);
multiply(b, c);
multiply(a, c);
// the function square
// return the value
function square(num) {
  let result = num * num;
  return result;
}
let resultSquare = square(2);
console.log(resultSquare);
// if else
// write a function which accepts the age and tells whether a person is eligible to vote or not
function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  }
  else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}
eligibleToVote(20);
eligibleToVote(16);
eligibleToVote(-1);
// create a function to check if number is even or odd 
// remainder is checked by mod sign %
function checkOddEven(number){
    let rem = number % 2 ;
    if ( rem == 0 ) {
        console.log("Even Number")
    }
    else {
        console.log("Odd Number")
    }
}
checkOddEven(0);
checkOddEven(2);
checkOddEven(5)