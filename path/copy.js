//创建一个可读流  和一个可写流
//1每次读入一次后开始写入 2档文件不能写入时暂停读取  3 等抽干后再恢复方法  4 监听读取后关闭写入  ws.end 方法
var fs=require('fs');
function copy(src,target){
    var rs=fs.createReadStream(src,{highWaterMark:4});
    var ws=fs.createWriteStream(target,{highWaterMark:1});
    rs.on('data',function(data){
        var flag=ws.write(data);
        if(!flag){rs.pause()}
    });
    ws.on('drain',function(){
        rs.resume()
    })
    rs.on('end',function(){
        ws.end();
    })

}
copy('./name.txt','./name1.txt')
