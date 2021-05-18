const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@libappvers0.op9lt.mongodb.net/LibAppVers0?retryWrites=true&w=majority",{useNewUrlParser:true});
const Schema=mongoose.Schema;

const authorSchema=new Schema({
    author:String,
    work:String,
    image:String
});

var authorData=mongoose.model("AuthorData",authorSchema);

module.exports=authorData;