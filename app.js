const express=require('express');
const app= new express();
//const port=process.env.PORT||5500;
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
        link:"/signup/login",
        name:"Login"
    },
    {
        link:"/signup",
        name:"SignUp"
    }

];
const booksRouter=require("./src/Router/bookRouter")(nav);
const authorRouter=require("./src/Router/authorRouter")(nav);
const addBookRouter=require("./src/Router/addbook")(nav);
const addAuthorRouter=require("./src/Router/addAuthor")(nav);
const userRouter=require("./src/Router/userRouter")(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views',__dirname+"/src/view");


app.use("/books",booksRouter);

app.use("/authors",authorRouter);

app.use("/addbook",addBookRouter);

app.use("/addauthor",addAuthorRouter);

app.use("/signup",userRouter);



app.get('/',function(req,res){
   // res.send("Hello World!!");
   //res.sendFile(__dirname+"/src/view/index.html");
   res.render("index",{
       nav,
       title:"Library"
   });
});









app.listen(5000);
//app.listen(port,()=>{console.log("Server ready at "+port)});