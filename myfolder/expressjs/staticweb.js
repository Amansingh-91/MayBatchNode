const express =  require("express");
const path =  require("path");

const app =  express();

// app.get("/",(req,res)=>{
    // console.log(path.resolve(__dirname,"../Staticweb/home.html"));
//     res.sendFile(path.resolve(__dirname,"../Staticweb/home.html"));
//     // res.send("Hello World")
// })

// app.get("/about.html",(req,res)=>{
//     // console.log(path.resolve(__dirname,"../Staticweb/home.html"));
//     res.sendFile(path.resolve(__dirname,"../Staticweb/about.html"));
//     // res.send("Hello World")
// })

// app.get("/contact.html",(req,res)=>{
//     // console.log(path.resolve(__dirname,"../Staticweb/home.html"));
//     res.sendFile(path.resolve(__dirname,"../Staticweb/contact.html"));
//     // res.send("Hello World")
// })

app.use(express.static("../Staticweb"))



app.listen(3000,()=>{
    console.log("Listening on port 3000...");
})
