//记录客户端的访问次数
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
/**
 * 如果要加密的话 cookieParser里要指定密码，而且signed要等于true
 */
app.use(cookieParser('zfpx'));
app.get('/write',function(req,res){
    //1.普通设置
    //res.cookie('name','value');

    //2.设置域名
    //res.cookie('name','zfpx',{domain:'a.zfpx.cn'});

    //3.设置路径
    //res.cookie('name','zfpx',{path:'/visit'});

    //4.过期时间
    //res.cookie('name','zfpx',{expires:new Date(Date.now()+20*1000)});//毫秒
    //res.cookie('name','zfpx',{maxAge:20*1000});//过期时间 毫秒

    //httpOnly true还是false无意义 document.cookie取不到
    //res.cookie('name','zfpx',{httpOnly:true});
    res.cookie('age','123',{signed:true});
    res.end('ok');
});

app.get('/read',function(req,res){
    console.log(req.signedCookies);
    res.send(req.cookies);
});

//记录这是客户端的第几次访问
app.get('/visit',function(req,res){
    res.cookie('count',isNaN(req.cookies.count)?0:parseInt(req.cookies.count)+1);
    res.send(req.cookies);
});


app.listen(9090);

