var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.end('欢迎来到首页'+req.host+" "+req.path);
});
app.listen(8080);