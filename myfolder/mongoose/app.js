const mongoose = require("mongoose");

const User = require("./User");

mongoose.connect("mongodb://localhost:27017/Practice",()=>{
   console.log("connected to database"); 
},(err)=>{
    console.log(err);
});



async function run(){
    // first way for storing

    // const firstUser = new User({
    //     name:"Aman",
    //     age:27
    // });

    // await firstUser.save();

    // second way of storing

    // const secondUser = await User.create({
    //     Firstname:"Div",
    //     Lastname:"rathore",
    //     age:26,
    //     email:"Div@gmail.com",
    //     createdAt: Date.now(),
    //     updatedAt: Date.now(),
    //     hobbies:["cooking","farming"]
    // });

    // console.log(secondUser.FullName);

    

    // console.log(secondUser);
    // 63f4e0ec364051b03e5a3cd8

    // const user = await User.findOne({name:"Divya"});
    // user.createdAt = new Date("1995/11/09");
    // user.updatedAt = Date.now();
    // console.log(await user.save());

    // console.log(user);

    // testing schema properties and validation

    // const secondUser = await User.create({
    //     name:"jack",
    //     age:25,
    //     email:"jack@gmail.com",
        
    //     hobbies:["cooking","farming"]
    // })

    // querying in mongoose

    // const user =await User.where("age").gt(25).byName("Div");
    // // user.sayHi();
    // console.log(user);

    
    // await User.deleteMany({});

    // const user =  await User.where("Firstname").equals("Dharam");
    // // console.log(user);
    // user[0].Firstname = "Dharamveer";
    // const newName = await user[0].save();
    




}

run();


