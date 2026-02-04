// module wrapper
console.log("hello module wrapper");
console.clear();
// iife function
const iifeFunction = "Immediately Invoked Function Evcaluation";
(function (exports, require, module, __filename, __dirname) {
  console.log("hello from iife");
})();
console.log(__dirname)
console.log(__filename)
