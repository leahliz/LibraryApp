const express=require("express");
const authorRouter=express.Router();
authorRouter.use(express.static("./public"));
const authorData=require("../model/authorData");

function router(nav){
/*var authors=[
    {
        author:"Dan Brown",
        work: "Da Vinci Code, Angels and Demons",
        image:"danbrown.jpg"
    },
    {
       
        author:"J.K.Rowling",
        work:"Harry Potter",
        image:"rowling.jpg"
    },
    {
        
        author:"Arundhati Roy",
        work:"The God of Small Things,The Ministry of Utmost Happiness",
        image:"ArundhatiRoy.jpg"
    }
];*/
const nav4={
    nlink:"/addauthor",
    nname:"Add Author"
};
   authorRouter.get("/",function(req,res){
      authorData.find()
      .then(function(authors){
        res.render("authors",{
            nav,nav4,
            title:"Authors" ,authors
       });
      }) 
   
});

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;
    authorData.findOne({_id:id})
    .then(function(author){
        res.render("author",{
            nav,nav4,
            title:"Author" ,author
        });
    })
   
});

authorRouter.get('/:id/updateAuthor',function(req,res){
  
    const id=req.params.id;
    authorData.findOne({_id:id})
    .then(function(author){
        res.render("updateAuthor",{
            nav,nav4,
            title:"Update Author" ,author
    })
       
    });
});

authorRouter.get('/:id/updateAuthor/updater',function(req,res){
    const id=req.params.id;
    var item={
        author:req.query.author,
        work:req.query.work,
        image:req.query.image
    };
    var myquery={_id:id};
    var newvalues={$set:item};
    authorData.updateOne(myquery,newvalues)
    .then((obj)=>{
        console.log("Updated"+obj);
        res.redirect("/authors");
    });
});

authorRouter.get('/:id/updateAuthor/dlt',function(req,res){
    const id=req.params.id;
    var myquery={_id:id}
    authorData.deleteOne(myquery)
    .then((obj)=>{
        console.log("Updated");
    res.redirect("/authors");
    });
    });




return authorRouter;
}
module.exports=router;