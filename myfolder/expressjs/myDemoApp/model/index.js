
// load db.config.js 
// importing the db url
const {url} =  require("../config/dbconfig");
// load mongoose
const mongoose =  require("mongoose");

const db ={};

db.mongoose = mongoose;

db.url = url;

db.People = require("./peopleSchema")(mongoose);



module.exports = db;