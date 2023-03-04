

module.exports = (mongoose)=>{

    const peopleSchema =  new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        createdAt:{
            type:Date,
            immutable:true,
            default: Date.now,
        },
        updatedAt:{
            type:Date,
            default: Date.now,
        }
    });

    const People = mongoose.model('people',peopleSchema);

    return People;

}