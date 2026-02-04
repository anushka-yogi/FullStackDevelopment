// manipulating strings
// "anushka"
// "this is a lot of text"
let firstName = "Anushka";
console.log(firstName);
let lastName = "Yogi";
console.log(lastName);
// let fullName = firstName + " " + lastName;
// string concatenation
// console.log(fullName);
console.clear();
//1. concatenation
let fullName = firstName.concat(" " + lastName);
console.log(fullName);
fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.clear();
// append
// firstName += lastName;
// console.log(firstName);
// console.clear()
// template literal
// firstName += ` ${lastName}`
// console.log(firstName)
// length
console.log(firstName.length);
// cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
// slice
console.log(firstName.slice(0, 2));
// split and join
console.log(firstName.split("").join("-"));
console.log(firstName);
console.clear();
// includes
console.log(firstName.includes("a"));
// trim
console.log(firstName.trim());
console.clear();
// back ticks
let desc = `"this is some random
 text"`;
console.log(desc);
let a = firstName;
let b = lastName;
let c = `${a} ${b}`;
console.log(c);
console.clear();
//type conversion
// string to number
let money = "50";
console.log(typeof money);
// convert string to number
// money = parseInt(money)
// money = +money;
money = Number(money);
console.log(typeof money);
console.clear();
// number to string
let applePrice = 50;
// applePrice = applePrice.toString();
// applePrice = String(applePrice)
console.log(typeof applePrice);
console.clear()
// string to decimal
money = "50.02";
console.log(typeof money)
money = parseFloat(money)
console.log(typeof money)
