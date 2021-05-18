const express=require("express");
const userRouter=express.Router();
userRouter.use(express.static("./public"));
const userData=require("../model/usersData");
function router(nav){

    userRouter.get("/",function(req,res){
        res.render("signup",{
            nav,
            title:"SignUp"
        });
    });
    
    userRouter.post("/add",function(req,res){
        var user={
          FirstName:req.body.FirstName,
          LastName:req.body.LastName,
          email:req.body.email,
          password:req.body.password  
        };
        var newUser=userData(user);
    newUser.save();
    res.redirect("/books");
    });

    userRouter.get("/login",function(req,res){
        res.render("login",{
            nav,
            title:"LogIn"
        });
    });

    userRouter.post("/login/check",function(req,res){
        var user={
            em:req.body.email,
            pass:req.body.password
        };
     
        userData.findOne({$and:[{email:user.em},{password:user.pass}]})
        
         .then((obj)=>{
           if(!obj)
           res.status(404).redirect("/signup");
           else
          res.redirect("/books");
        });
       
}); 

    return userRouter;
}


module.exports=router;