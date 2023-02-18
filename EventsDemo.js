const EventEmitter = require("events")

const customEvent = new EventEmitter();

// on and emit method

customEvent.on("shakeandbake",(name,age)=>{
    console.log("event shake and bake",name,age);
});

customEvent.on("shakeandbake",()=>{
    console.log("event shake and bake second handler");
});
customEvent.emit("shakeandbake","Aman",27);

customEvent.on("balanceLow",()=>{
    console.log("your balance is insufficient");
})
customEvent.on("balanceAvailable",()=>{
    console.log("your balance is sufficient for withdraw");
})

let balance = 500
if(balance <5000){
    customEvent.emit("balanceLow");
}
else{
    customEvent.emit("balanceAvailable");
}

// const http = require("http");

// const server = http.createServer();

// server.on("request",(req,res)=>{
//     res.end("hello");
// });

// server.listen(5000);