//  three types of modules
//  user defined
//  inbuilt
//  third party

const { readFile, writeFile } = require("fs");
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);



// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, result) => {
//       if (err) {
//        return reject(err);
//       }
//       return resolve(result);
//     });
//   });
// };


// const readFilePromise = async()=>{
//     const first = await getText("./myFolder/first.txt");
//     const second= await     getText("./myFolder/second.txt");
//     console.log(first,second);
// }

const printData =async()=>{
    const first = await readFilePromise("./myFolder/first.txt","utf8");
    const second = await readFilePromise("./myFolder/second.txt","utf8");
    console.log(first,second);
    await writeFilePromise("./myFolder/forth.txt",`This is AWESOME:, ${first}, ${second}`,{flag:"a"});
}
printData();

// getText("./myFolder/first.txt")
//     .then((result)=>{
//         console.log(result);
//         return getText("./myFolder/second.txt");
//     })
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

