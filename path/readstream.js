var fs=require('fs');

var rs=fs.createReadStream('./name.txt',{
    hightWaterMark:3
});
//如果设置编码utf8  最小编码为3
rs.setEncoding('utf8');
var str='';

//暂停出水  开启出水

rs.on('data',function(data){//默认每次读取64  不停的以最快速度将内容读取到内存
    str+=data;
console.log('出水');
    rs.pause();//停止触发 data 事件
});
var timer=setInterval(function(){
    rs.resume()
},2000);
rs.on('end',function(){
    console.log(str)
    clearInterval(timer)
});
