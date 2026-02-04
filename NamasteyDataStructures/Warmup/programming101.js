// strings is wrapped inside double quotes
console.log("Hello World");
// number => 1-9,0
console.log(123);
// boolean => true or false ( 0 or 1 )
console.log(true);
// mathematical operations
// constants
// values cant be modified/changed later
const a = 10;
const b = 20;
const sum = a + b;
const multiply = a * b;
const difference = a - b;
console.log(sum);
console.log(multiply);
console.log(difference);
// let
// values can be changed
let x = 20;
console.log(x);
x = 30;
console.log(x);
let firstName = "Anushka";
let LastName = "Yogi";
let fullName = firstName + LastName;
console.log(fullName);
// space strings
fullName = firstName + " " + LastName;
console.log(fullName);
// in js addinga. string to number concatenates a number to string and then add a number to string
let number = 24;
console.log(fullName + " " + number);
// space in between two numbers in addition vs no space => string concatenation / addition
let num1 = 1 ;
let num2 = 2 ;
let addString = num1 + num2;
console.log(addString); // 3
addString = num1 + " " + num2;
console.log(addString); // 1 2
// whenever js is running that means the code is executing inside js engine and it executes line by line 
// Arrays
// can store multiple values
let arr = [ 2 , 6 , 0 , 100 , 9 , 27 ];
console.log(arr);
// how js stores arrays?
// stores index and values 
console.log(arr[0]);
console.log(arr[0] + arr[1]);
console.log(arr[6]); // undefined 
// array of strings
let stringArr = [ "A" , "n" , "u" , "s" , "h" , "k" , "a"];
console.log(stringArr[0]);
// arrays can be a mix and match of any data type => string , numbers , boolean , arrays
let mixedArr = [ "A" , "n" , "u" , "s" , "h" , "k" , "a" , 24 , true , [10 ,20 , 30,40 , [1,2,3,4]]];
console.log(mixedArr[7]);
console.log(mixedArr[9][2]);// 9th index is an array and 2nd indix is its value : 30
console.log(mixedArr[9][4][3]);// 9th index is an array and 4th index is again an array and 3 index is the value of the inside array : 4
// objects
// key value pair
// created by curly braces
// dot sign gives you the value of whats written after it
let obj = {
    a: 7 ,
    name: "Anushka",
    bool: true,
    arr: [6,7,8]
}
console.log(obj.a + " " + obj.name);


