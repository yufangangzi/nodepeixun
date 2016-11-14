var express=require('express');

var app=express();
//使用中间件  有三个参数  请求 响应 next
//可以把公共的代码写在中间件里面
//用途 1增加公共的方法和属性 2 进行公共的处理
/**
 *
 * 路由和中间件在一个数组中
 * 中间件不匹配路径和方法名
 * 中间件多了next函数 他能决定是否继续
 */

app.use(function(req,res,next){
    res.setHeader('Content-Type',"text/plain;charset=utf-8");
    //next是个函数 如果调用他 说明此中间件已经执行完毕 可以向下执行
    next()
});

app.get('/',function(req,res){
    res.end('首页')
});

app.get('/login',function(req,res){
    res.end('登录')
});
//curl -X POST http://localhost:9090/login 可以在git bash 发送post请求
app.post('/login',function(req,res){
    res.end('post 登录')
});
//get  post delete put patch head
app.get('/user',function(req,res){
    res.end('用户主页')
});
//all匹配所有
app.all('*',function(req,res){
    res.end('你请求的路径不存在')
})


app.listen(9090);
