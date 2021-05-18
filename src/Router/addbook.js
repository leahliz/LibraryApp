const express=require("express");
const addBook=express.Router();
addBook.use(express.static("./public"));

const bookData=require("../model/bookData");

function router(nav){
addBook.get("/",function(req,res){
    res.render("addbook",{
        nav,
        title:"Add Book"
    });
});
addBook.get("/add",function(req,res){
  var item={
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image
    };
    var book=bookData(item);
    book.save();
    res.redirect("/books");
});
return addBook;
}
module.exports=router;