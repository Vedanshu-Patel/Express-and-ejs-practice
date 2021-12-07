var express = require("express");
var app = express();

var BodyParser = require("body-parser");
app.use(BodyParser.urlencoded({extended: true}));

var friends=["Joey","Chandler","Monica","Jim","Rachael","Ross","Monica","Pam","Dwight","Michael"];

app.get("/",function(req, res){
    res.render("home.ejs");
});

app.get("/friends",function(req, res){
    res.render("friends.ejs",{friendsv:friends});
});

app.post("/addfriend",function(req, res){
    var newfriend=req.body.NewFriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("*",function(req, res){
    res.send("Wrong!!!");
});

app.listen(9999,function(){
    console.log("Server started!");
});