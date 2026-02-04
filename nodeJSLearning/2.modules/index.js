const greet = require("./greet");
const { person1, person2, person3 } = require("./persons");
console.log(person1);
console.log(person2);
console.log(person3);
greet("Anushka");
greet(person1)
greet(person2);
greet(person3);