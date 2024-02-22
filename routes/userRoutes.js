const express=require("express");
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./views');
const userController=("../controllers/userController");

 app.get("/signup",function(req,resp){
    resp.render("signup");
 });
  app.post("/signup",userss);


  module.exports=userRoute;
