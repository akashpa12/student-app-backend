const mongoose =require("mongoose")
const schema = mongoose.Schema(
    {
        "_id":{type:String,required:true},
        "fname":{type:String,required:true},
        "lname":{type:String,required:true},
        "college":{type:String,required:true},
        "dob":{type:String,required:true},
        "course":{type:String,required:true},
        "mobile":{type:String,required:true},
        "email":{type:String,required:true},
        "address":{type:String,required:true},
        "__v":{type:String,required:true}







    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}