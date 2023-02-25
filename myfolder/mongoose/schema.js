const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true,
    },
    ordersId:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref: 'orders'
    }
});

const Customer = mongoose.model("customer",customerSchema);

const orderSchema = new mongoose.Schema({
    itemName:{
        type:String
    },
    itemPrice:{
        type:Number,
    },
    orderTime:{
        type: Date,
        immutable: true,
        default: Date.now,
    },
    customer:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"customer",
        required:true
    },

});

const Order = mongoose.model("order",orderSchema);

module.exports = {Customer,Order};



