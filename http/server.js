var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    //是一个可读流
    //res 是一个流  可写流
    console.log(req.url);//默认更目录
    console.log(req.method);//请求的方法
    console.log(req.headers);//获取所有的请求头
    if(req.url=='/'){
        //设置响应类型
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res)
    }else{
        res.statusCode=404;
        res.end('')
    }

    //res.setHeader('Content-Type','text/plain;charset=utf8');
    //res.statusCode=200;
    //
    //res.write('你好');
    //res.end('word')
}).listen(8080,'localhost');
