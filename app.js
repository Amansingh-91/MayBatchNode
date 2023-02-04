//  three types of modules
//  user defined
//  inbuilt
//  third party

const http = require("http");

const server =  http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    console.log(url,method);
    if(url === "/" && method == "GET"){
        res.end("<h1>Home page</h1>");
    }
    else if(url === "/about" && method == "GET"){
        res.end("<h1>about page</h1>");
    }
    else if(url === "/contactus" && method == "GET"){
        res.end("<h1>contact us page</h1>");
    }
    else{
        res.end("<h1>page not found</h1>");
    }
});

server.listen(5000,()=>{
    console.log("listening on port 5000");
});