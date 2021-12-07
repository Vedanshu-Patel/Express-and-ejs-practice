var express = require("express");
var app =express();


app.get("/",function(req,res){
    res.send("Hi There!")
});

// app.get("/speak/pig",function(req,res){
//     res.send("oink");
// });

// app.get("/speak/cow",function(req,res){
//     res.send("moo");
// });
// app.get("/speak/dog",function(req,res){
    
//     res.send("woof");
// });

app.get("/speak/animals",function(req,res){
    var sounds={
        pig:"oink",
        cow:"moo",
        dog:"woof",
        cat:"meow"
    }
    var animal=req.params.animals;
    var sound=sounds[animal];
    res.send(sound);
});
app.get("/repeat/:p/:n",function(req,res){
    var s=req.params.p;
    var k=req.params.n;
    var result="";
    for(var i=0;i<k;i++){
        result+=s + " ";
    }
    res.send(result);
});

app.get("*",function(req,res){
    res.send("Wrong path!!");
});

app.listen(8888,function(){
    console.log("It works!!. It listens!!");
});