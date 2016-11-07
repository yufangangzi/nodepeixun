var http=require('http');
var fs=require('fs');
var crypto=require('crypto');
var mime=require('mime');
var url=require('url');
var path=require('path');

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);z
    var pathname=urlObj.pathname;
    var query=urlObj.query;
    if(pathname=='/'){
        //设置响应类型
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res)
    }else{
        fs.exists('./'+pathname,function(exists){
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('./'+pathname).pipe(res)
            }else{
                res.statusCode=404;
                res.end('not found this file');
            }
        })

    }


}).listen(8080,'localhost');


