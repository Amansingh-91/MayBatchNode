const express = require("express");
const cors = require("cors");

const {createConnection} = require("./database");

const app = express();

app.use(express.static("./frontend"));
app.use(cors(3000));
app.use(express.json());

app.post("/register",async(req,res)=>{
    const data = req.body;
    console.log(data);
    const db = await createConnection("Practice");
    const collection = db.collection("users");
    const resp = await collection.insertOne({...data});
    console.log(resp);

    res.send({"success":true});
});

app.listen(3000);