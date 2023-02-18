const http = require("http");
const {readFileSync,createReadStream} = require("fs");

const server =  http.createServer((req,res)=>{
    // const file = readFileSync("./myfolder/big.txt","utf-8");
    // res.end(file);
    const stream = createReadStream("./myfolder/big.txt");
    stream.on("open",(result)=>{
        stream.pipe(res);
    })
})

server.listen(5000)