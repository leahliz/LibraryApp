const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@libappvers0.op9lt.mongodb.net/LibAppVers0?retryWrites=true&w=majority",{useNewUrlParser:true});
const Schema=mongoose.Schema;

const userSchema=new Schema({
FirstName:String,
LastName:String,
email:String,
password:String
});

var userData=mongoose.model("UserData",userSchema);

module.exports=userData;