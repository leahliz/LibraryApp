const express=require("express");
const booksRouter=express.Router();
booksRouter.use(express.static("./public"));
const bookData=require("../model/bookData");
function router(nav){
   
/*var books=[
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
];*/
const nav4={
    nlink:"/addbook",
    nname:"Add Book"
};



   booksRouter.get("/",function(req,res){
       bookData.find()
       .then(function(books){
        res.render("books",{
            nav,nav4,
            title:"Books" ,books 
       })
       }
    );
});

booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    bookData.findOne({_id:id})
    .then(function(book){
        res.render("book",{
            nav,nav4,
            title:"Book" ,book
    })
       
    });
});

booksRouter.get('/:id/updateBook',function(req,res){
  
    const id=req.params.id;
    bookData.findOne({_id:id})
    .then(function(book){
        res.render("updateBook",{
            nav,nav4,
            title:"Update Book" ,book
    })
       
    });
});

booksRouter.get('/:id/updateBook/updater',function(req,res){
    const id=req.params.id;
    var item={
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image
    };
    var myquery={_id:id};
    var newvalues={$set:item};
    bookData.updateOne(myquery,newvalues)
    .then((obj)=>{
        console.log("Updated"+obj);
        res.redirect("/books");
    });
});

booksRouter.get('/:id/updateBook/dlt',function(req,res){
const id=req.params.id;
var myquery={_id:id}
bookData.deleteOne(myquery)
.then((obj)=>{
    console.log("Updated");
res.redirect("/books");
});
});

return booksRouter;
}
module.exports=router;

 