var express=require("express");
var app= express();

app.use(express.static("public"));

// app.set('view engine', 'ejs');  if we dont want to use .ejs 

app.get('/', function(req, res){
    res.render("home.ejs");
});
app.get('/love/:thing', function(req, res){
    var thing=req.params.thing;
    res.render("love.ejs",{thingv: thing});
});

app.get('/posts', function(req, res){
    var posts=[
        {
            title:"hello",author:"John"
        },
        {
            title:"bye",author:"Janice"
        },
        {
            title:"How you doin?",author:"Joey"
        },
        {
            title:"What!!",author:"Rachael"
        }
    ]

    
    res.render("post.ejs",{postsv: posts});
});

app.get("*", function(req, res){
    res.send("Wrong!!!");
});

app.listen(8888,function(){
    console.log("It works");
});