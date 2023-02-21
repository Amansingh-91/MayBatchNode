const mongoose = require("mongoose");


const usesrSchema =  new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:70,
        validate:{
            validator: v => v % 2 ===0,
            message: props => `${props.value} is not valid age`
        }

    },
    email: {
        type: String,
        minLength:10,
        required:true,
        lowercase:true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
        immutable: true,
    },
    updatedAt:{
        type:Date,
        default: Date.now,
    },
    hobbies:[String],

    bestFriend: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    },


});

module.exports = mongoose.model("user",usesrSchema);