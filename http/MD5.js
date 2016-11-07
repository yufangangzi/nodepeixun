var http=require('http');
var fs=require('fs');
var crypto=require('crypto');

http.createServer(function(req,res){
    if(req.url=='/'){
        //设置响应类型
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res)
    }else if(req.url=='/index.js'){
        var data=fs.readFileSync('./index.js');
        data=crypto.createHash('md5').update(data).digest('hex');
        var match=req.headers['if-none-match'];

        if(match&&match==data){

            res.statusCode=304;
            res.end('')
        }else{

            res.setHeader('Etag',data);
            fs.createReadStream('./index.js').pipe(res)
        }


    }else{
        res.statusCode=404;
        res.end('');
    }


}).listen(8080,'localhost');

