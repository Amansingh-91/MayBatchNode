const express = require("express");

const app = express();

// app.get , app.post , app.put , app.delete
// app.all , app.use , app.listen

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>");
})

app.all("*",(req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(3000,()=>{
    console.log("Listening on post 3000...");
})