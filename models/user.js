const mongoose=require("mongoose");
const user_Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    language:String,
    Salary:Number,
    Age:Number
});
const activity=mongoose.model("employee",user_Schema);
module.exports=activity;