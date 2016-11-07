var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
//先获取index.js ctime 发给浏览器端
    //下次访问时会带有 ctime 如果不一致 返回新的文件
    if(req.url=='/'){
        //设置响应类型
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res)
    }else if(req.url=='/index.js'){
        //内容频繁的修改  精确不到秒  很多服务器修改时间不准确
        //判断文件的内容  如果有变化 刷新
        var timer=fs.statSync('./index.js').ctime.toUTCString();//获取最近修改的时间
        //if-modified-since  在请求头中 没发送过last-modified  是不会有的
        var ctime=req.headers['if-modified-since'];
        if(ctime&&timer==ctime){
            //如果有ctime  并且没有变化  第二次访问
            res.setHeader('Content-Type','application/x-javascript;charset=utf8');
            res.statusCode=304;
            res.end('')
        }else{
            //第一次访问
            res.setHeader('Content-Type','application/x-javascript;charset=utf8');
            res.setHeader('last-modified',timer);//设置最近修改的时间给头部
            fs.createReadStream('./index.js').pipe(res)
        }


    }else{
        res.statusCode=404;
        res.end('');
    }


}).listen(8080,'localhost');
