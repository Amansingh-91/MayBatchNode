
const path =  require("path")

console.log(__dirname);

const newpath =  path.join(__dirname,"/myfolder/","/subfolder/","my.txt");

console.log(newpath);

console.log(path.basename(newpath));