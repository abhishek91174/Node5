const express=require("express");
const app= express();
const connection=require("./conn");
const bodyParser=require("body-parser");
app.use(bodyParser.json());
 let userModel=require("./models/user");
 let companyModel=require("./models/userComapny");
 let departModel=require("./models/userDepartment");
 const bcrypt=require("bcrypt");   
 
 app.post("/signup",async(req,resp)=>{
    let data=await userModel.findOne({email:req.body.email});
    if(data==null){
        let salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt);
        let data=await userModel.create({name:req.body.name,email:req.body.email,password:secPassword,language:req.body.language,Salary:req.body.salary,Age:req.body.age});
        resp.json({message:"user registraion succcessfully done"});
    }else{
        resp.json({message:"this username already exists"});
    }
 });
  app.post("/user_details",async(req,resp)=>{
    let user_data=await userModel.findOne({email:req.body.email});
    console.log(user_data);
    if(user_data){
      let data=await companyModel.create({user_name:req.body.user_name,user_id:user_data._id,c_name:req.body.c_name,gst_number:req.body.number});
      resp.json({message:"user company details inserted",data});
    }
  });
  app.post("/dept_details",async(req,resp)=>{
    let user_data=await userModel.findOne({email:req.body.email});
    if(user_data){
      let data=await departModel.create({user_id:user_data._id,user_name:req.body.user_name,dept_name:req.body.dept_name,desig_no:req.body.desig_no,salary:req.body.salary});
      resp.json({message:"user department details inserted",data});
    }
  });


  
    // app.get("/get_info",async(req,resp)=>{
       
    //   let data_cam=await userModel.aggregate([
    //     {
    //       $match:{
    //         _id:{
    //           $ne:null
    //         }
    //       }
    //     },
    //     {
    //       $addFields:{
    //         id:{
    //           $toString:"$_id"
    //         }
    //       }
    //     },
    //     {
    //       $lookup:{
    //         from:"companies",
    //         localField:"id",
    //         foreignField:"user_id",
    //         as:"company_details"
    //       }
    //     },
        
    //   ]);
    //    resp.json({message:"company details insetred",data_cam});
    // });


     app.get("/get_infoo",async(req,resp)=>{
      let data=await userModel.aggregate([
        {

        $match:{
          _id:{
            $ne:null

          }
        }
      },
      {
        $addfields:{
          _id:{
                                                               
          }

        }
        }
      ])
     });
     




  app.listen(5000,function(){
    console.log("this server is running at port 5000");
  });