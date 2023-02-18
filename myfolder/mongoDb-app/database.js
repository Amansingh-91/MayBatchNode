// import MongoClient from mongodb
const {MongoClient} = require('mongodb');

// provide path for connection
const url = "mongodb://localhost:27017";

//create client
const client = new MongoClient(url);

module.exports.createConnection = async(dbName)=>{
    let result = await client.connect();
    return result.db(dbName);
}



