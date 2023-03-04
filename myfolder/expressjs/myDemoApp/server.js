const express = require("express");

// importing resources
const app = express();
const PORT = 5000;
// importing model db
const {url,mongoose} = require("./model/index"); 
// serving static resources
app.use(express.static("./public"));

app.use(express.urlencoded({extended:false}));

app.use(express.json());


// create connection 

mongoose.connect(url,()=>{
    console.log("Connected to db");
},()=>{
    console.log("couldn't connect to db");
});

// Api

require("./router/people.ruoter")(express,app);


app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`);
})