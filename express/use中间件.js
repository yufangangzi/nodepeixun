var express=require('express');
var app=express();
/**
 * 中间件可以给赋值
 * 可以提前结束 res.end()
 */
//中央
app.use(function(req,res,next){
    req.money=100;
    next()
});
//县里
app.use(function(req,res,next){
    req.money-=30;
    //next中 不传参数 会继续执行下面的路由 如果有参数就是错误信息 直接到错误处理中间件
    next('')
});

//村里
app.use(function(req,res,next){
    req.money-=30;
    next()
});
app.get('/money',function (req,res){
    console.log('农民收到'+req.money);
    res.end()
})

app.all('*',function(req,res){
    res.end('你请求的路径不存在')
});
//错误处理中间件 有四个参数 错误处理函数只能放在最后面
app.use(function(err,req,res,next){
    console.log(err);
    res.end('error');
    next()
});
//在错误处理中间件函数中调用next函数  下面的还是可以执行  但是res.end()只能执行一次
app.use(function(req,res,next){
    res.end('你好')
})

app.listen(9090);/**
 * Created by Administrator on 2016/11/12.
 */
