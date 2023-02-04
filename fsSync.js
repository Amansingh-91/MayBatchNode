const {readFileSync,writeFileSync} = require("fs");

const first = readFileSync("./myfolder/first.txt","utf8");

const second = readFileSync("./myfolder/second.txt","utf8");

console.log(first);

console.log(second);


writeFileSync("./myfolder/result.txt",`${first} ${second}`);