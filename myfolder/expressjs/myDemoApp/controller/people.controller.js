const db = require("../model/index");

const People = db.People;

const getAllPeople = async(req,res)=>{
    const allPeople = await People.find();
    console.log(allPeople);
    res.status(200).json(allPeople); 
}

const addNewPerson = async(req,res)=>{
    console.log(req.body);
    const newPerson =  req.body;
    const person = await new People(newPerson).save();
    console.log(person);
    res.send("data recived");
}

const updatePerson = async(req,res)=>{
    const {id} = req.params;
    const updateDetails = {
        ...req.body
        ,updatedAt:Date.now()
    };
    let person = await People.findById(id);
    if(person){
        console.log(updateDetails);
        const response = await person.updateOne(updateDetails);
        console.log(response);
        return res.status(201).json({success:true,msg:"Data updated"});

    }
    res.status(201).json({success:false,msg:"Data could not be updated"});
}

module.exports = {
    getAllPeople,
    addNewPerson,
    updatePerson,
}