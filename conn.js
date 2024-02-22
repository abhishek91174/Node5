const mongoose=require("mongoose");
mongoose.set('strictQuery',false)
try{
 
    const connection=mongoose.connect('mongodb://127.0.0.1:27017/organisation',{
    });
    if(connection){
        console.log("connected to database");
    }

} catch (error){
    console.log(error,"connection is not established");
}