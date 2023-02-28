// Routing parameters or params

const express = require("express");
const { data } = require("./people");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<H1>Home page</H1><a href='/people'>all people</a>");
});

app.get("/people/:peopleId", (req, res) => {
  console.log(req.params);
  const { peopleId } = req.params;
  if (peopleId) {
    
    let newData = data.find((person) => person.id == peopleId);
    if (newData) {
      return res.status(200).json(newData);
    }
    return res
      .status(200)
      .json({ success: true, msg: `Person with Id:${peopleId} not found` });
  }
  res.json(data);
  // res.send("Hello")
});

app.get("/people/:1d/hello/:newId",(req,res)=>{
    console.log(req.params);
    res.send("hello World");
})


app.listen(3000, () => {
  console.log("listening on port 3000...");
});
