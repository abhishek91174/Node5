const express=require("express");
const app=express();
//let userModel=require("./models/user");
require("./conn");
const userRoute=("./routes/userRoutes");
 
app.use('/',userRoute);


app.listen(4000,()=>{
    console.log("this is running on 3000 port");
});
