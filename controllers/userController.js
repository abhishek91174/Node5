const newUsers=require("..models/user");
 
const insertUser=async(req,resp)=>{
    let data=await newUsers.create({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address
    });
    resp.send(data);
}
module.exports=insertUser;