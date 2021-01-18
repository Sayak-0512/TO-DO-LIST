const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let itemsArray=["Buy Food","Cook Food","Eat Food"];
let workArray=[];
app.get("/",function(req,res){
  let day=date.getDate();

  res.render('list',{listName: day, newListItems: itemsArray});
});
app.post("/",function(req,res){
  let item=req.body.newItem;
if(req.body.button==="Work List")
{
  workArray.push(item);
  res.redirect("/work");
}
else
{
  itemsArray.push(item);
  res.redirect("/");
}


})
app.get("/work",function(req, res){
  res.render("list",{listName:"Work List",newListItems: workArray});
})

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
