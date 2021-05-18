const express=require("express");
const addAuthor=express.Router();
addAuthor.use(express.static("./public"));

const authorData=require("../model/authorData");

function router(nav){
addAuthor.get("/",function(req,res){
    res.render("addauthor",{
        nav,
        title:"Add Author"
    });
});
addAuthor.get("/add",function(req,res){
  var item={
        author:req.query.author,
        work:req.query.work,
        image:req.query.image
    };
    var author=authorData(item);
    author.save();
    res.redirect("/authors");
});
return addAuthor;
}
module.exports=router;