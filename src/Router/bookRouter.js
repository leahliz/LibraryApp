const express=require("express");
const booksRouter=express.Router();
booksRouter.use(express.static("./public"));

function router(nav){
   
var books=[
    {
        title:"Da Vinci Code",
        author:"Dan Brown",
        genre:"Fiction",
        image:"davinci.jpg"
    },
    {
        title:"Harry Potter",
        author:"J.K.Rowling",
        genre:"Fantasy",
        image:"harrypotter.jpg"
    },
    {
        title:"The God of Small Things",
        author:"Arundhati Roy",
        genre:"Fiction",
        image:"gos.jpg"
    }
];
const nav4={
    nlink:"/addbook",
    nname:"Add Book"
};



   booksRouter.get("/",function(req,res){
    res.render("books",{
        nav,nav4,
        title:"Books" ,books 
   });
});

booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("book",{
        nav,nav4,
        title:"Books" ,book:books[id]   
    });
});


return booksRouter;
}
module.exports=router;