const mongoose=require("mongoose");
const deptSchema=new mongoose.Schema({
    user_id:String,
    user_name:String,
    dept_name:String,
    desig_no:String,
    salary:Number
});
let activity=mongoose.model("department",deptSchema);
module.exports=activity;