const mongoose = require("mongoose");



const userSchema =  new mongoose.Schema({
    Firstname:String,
    Lastname:String,
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

    bestFriend: [{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }],
    AccountDetails:{
        AccountNumber:{
            type:Number
        },
        balance:{
            type:Number
        }
    }
    
     
    


});

userSchema.method("sayHi" ,function(){
   console.log(`Hi,my name is ${this.Firstname}`);
})

userSchema.statics.findByName = function(name){
    return this.where({name: new RegExp(name,"i")});
}

userSchema.query.byName = function (name) {
    return this.where({name: new RegExp(name,"i")});
}

userSchema.virtual("FullName").get(
    function () {
        return `${this.Firstname} ${this.Lastname}`;
    }
)
// Middleware
userSchema.pre("save",function(next){
    console.log("In middleware");
    this.updatedAt = Date.now();
    next();
}); 

userSchema.post("save",function(doc,next){
    doc.sayHi();
    next();
});


module.exports = mongoose.model("user",userSchema);

const customerSchema =  new mongoose.Schema({
    name:String,
    orders: [
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"order",
        }
    ]
})

const orderSchema = new mongoose.Schema({
    orderType:String,
    orderVaue:Number,
    customerId: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"customer",
    }
})

module.exports = mongoose.model("order",orderSchema);
module.exports = mongoose.model("customer",customerSchema);