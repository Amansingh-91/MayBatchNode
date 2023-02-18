const {createConnection} = require("./database");

const getData = async()=>{
    let db = await createConnection("Practice");
    let collection = db.collection('Student');
    let data = await collection.find().count();
    console.log(data);
}


const insertData = async(data)=>{
    let db = await createConnection("Practice");
    let collection = db.collection('Student');
    let res = await collection.insertOne(data);
    console.log(res);
}

// insertData({
//     'name':"jack",
//     'age':35
// })

getData();