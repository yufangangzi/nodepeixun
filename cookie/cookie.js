var express=require('express');
//构建一个express实例
var app=express();
//use表示使用一个中间件函数 next 是个函数 是一个有express提供的  继续下一个函数的意思
app.use(function(req,res,next){
    res.setHeader('Content-Type',"text/plain;charset=utf-8");
    res.end('over');
    next();//如果调用就继续执行下面的路由
})
//get请求 根据不通的路径处理就叫路由
//第一个参数是pathname
app.get('/index',function(req,res){
    console.log('nihao 陈刚')
    res.end('陈刚')
});

app.get('/home',function(req,res){
    console.log('nihao 北京')
    res.end('home')
});

//匹配所有的路径
app.all('*',function(req,res){
    res.end('404')
});
app.get('*',function(req,res){
    res.end('404')
})
app.listen(8080);

