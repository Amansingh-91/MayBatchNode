const http = require("http");

const {readFileSync} = require("fs");

const server = http.createServer((req,res)=>{
        // request url and method
        const url = req.url;
        const method = req.method;

        // reading my html files
        const home = readFileSync("./home.html","utf-8");
        const about = readFileSync("./about.html","utf-8");
        const contact = readFileSync("./contact.html","utf-8");
        
        if((url === "/" || url === "/home.html") && method ==="GET"){
            res.writeHead(200,"OK",{"content-type":"text/html"})
            res.write(home);
            res.end();
        }
        else if((url === "/about" || url === "/about.html") && method ==="GET"){
            res.writeHead(200,"OK",{"content-type":"text/html"})
            res.write(about);
            res.end();
        }
        else if((url === "/contact" || url === "/contact.html") && method ==="GET"){
            res.writeHead(200,"OK",{"content-type":"text/html"})
            res.write(contact);
            res.end();
        }
        else{
            res.writeHead(404,"Not Found",{"content-type":"text/html"})
            res.write("<h1>Page not found</h1>");
            res.end();
        }

});

server.listen(5000,()=>{
    console.log("Listening on server port 5000:");
})