var express = require('express');
var app = express();

var BodyParser = require("body-parser");
app.use(BodyParser.urlencoded({extended: true}));

var lists=[{name:"Chandler" , subject: "Arts" , RegNo:"20BCE0001" ,gender:"Male", slot:"A",teachers:"RD Sharma"},
            {name:"Joey" , subject: "Food" , RegNo:"20BCE0002",gender:"Male", slot:"B",teachers:"RD Sharma"}];

app.get('/', function(req, res){
    res.render("list.ejs",{listsv:lists});
});

app.get('/form', function(req, res){
    res.render("form.ejs");
});

app.post('/add', function(req, res){
    var newname=req.body.Namee;
    var newsubject=req.body.subject;
    var newregno=req.body.RegNo;
    var newgender=req.body.Gender;
    var newslot=req.body.slot;
    var newteacher=req.body.teachers;


    lists.push({name:newname, subject:newsubject,RegNo:newregno,gender:newgender, slot:newslot, teachers:newteacher});

    res.redirect("/");
});

app.get('*', function(req, res){
    res.send("Wrong");
});

app.listen(8080, function(){
    console.log("Server Started!!");
});
