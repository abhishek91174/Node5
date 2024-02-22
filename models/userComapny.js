const mongoose=require("mongoose");
const companySchema=new mongoose.Schema({
    user_id:String,
    user_name:String,
    c_name:String,
    gst_number:String
});
  const activity=new mongoose.model("company",companySchema);
  module.exports=activity;