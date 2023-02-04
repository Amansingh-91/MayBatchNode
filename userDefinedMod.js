// const names = require("./names");
const {john,peter} = require("./names");
const {sayHi} = require("./greet");
// console.log(names);
sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
sayHi(john);
sayHi(peter);
