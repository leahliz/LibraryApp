const express=require('express');
const app= new express();
const port=process.env.PORT||5500;
const nav=[
    {
        link:"/books",
        name:"Books"
    },
    {
        link:"/authors",
        name:"Authors"
    },
    {
        link:"/login",
        name:"Login"
    },
    {
        link:"/signup",
        name:"SignUp"
    }

];
const booksRouter=require("./src/Router/bookRouter")(nav);
const authorRouter=require("./src/Router/authorRouter")(nav);

app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views',__dirname+"/src/view");

app.use("/books",booksRouter);

app.use("/authors",authorRouter);

app.get('/',function(req,res){
   // res.send("Hello World!!");
   //res.sendFile(__dirname+"/src/view/index.html");
   res.render("index",{
       nav,
       title:"Library"
   });
});

app.get("/login",function(req,res){
    res.render("login",{
        nav,
        title:"LogIn"
    });
});

app.get("/signup",function(req,res){
    res.render("signup",{
        nav,
        title:"SignUp"
    });
});

app.get("/addbook",function(req,res){
    res.render("addbook",{
        nav,
        title:"Add Book"
    });
});

app.get("/addauthor",function(req,res){
    res.render("addauthor",{
        nav,
        title:"Add Book"
    });
});




app.listen(port,()=>{console.log("Server ready at "+port)});