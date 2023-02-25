// importing third party modules
const mongoose = require("mongoose");
const express = require("express");

// importing schema
const { Order, Customer } = require("./schema");

// making connection to Database
mongoose.connect("mongodb://localhost:27017/Practice");

const app = express();

// using express middleware

app.use(express.json());

// api
app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  const data = await JSON.stringify(customers);
  res.end(data);
});

app.post("/addcustomer", async (req, res) => {
  const data = req.body;

  const newCustomer = await new Customer(data).save();
  console.log(newCustomer);

  res.end("Success");
});

app.post("/placeorder", async (req, res) => {
  const data = req.body;

  try {
    let customer = await Customer.findById(data.customer);
    // console.log(customer);
    if (customer) {
      const newOrder = await new Order(data).save();

      customer.ordersId = [...customer.ordersId, newOrder._id];

      await customer.save();
      console.log(customer);

      console.log(newOrder._id);
      res.end("Success");
      return;
    }
    res.status(404).end("customer not present");
  } catch (err) {
    res.status(404).end("not valid customer");
  }
});

app.get("/customer/:id",async(req,res)=>{
    const id = req.params.id;
    console.log(id);

    try{
        const customers = await Customer.findById(id);
        if(customers){
            
            res.json(customers);
            res.end();
            return
        }
        res.send("customer not present");

        
    }
    catch(err){
        res.send("invalid customer Id");
    }
})

app.get("/order/:id",async(req,res)=>{
    const id = req.params.id;
    console.log(id);

    try{
        const order = await Order.findById(id).populate("customer");
        if(order){
            
            res.json(order);
            res.end();
            return
        }
        res.send("order not present");

        
    }
    catch(err){
        res.send("invalid order Id");
    }
})
app.listen("3000", () => {
  console.log("Listening on port 3000");
});
