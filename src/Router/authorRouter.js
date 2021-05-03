const express=require("express");
const authorRouter=express.Router();
authorRouter.use(express.static("./public"));

function router(nav){
var authors=[
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
];
const nav4={
    nlink:"/addauthor",
    nname:"Add Author"
};
   authorRouter.get("/",function(req,res){
    res.render("authors",{
        nav,nav4,
        title:"Authors" ,authors
   });
});

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render("author",{
        nav,nav4,
        title:"Authors" ,author:authors[id] 
    });
});
return authorRouter;
}
module.exports=router;