//流是从上到下  始终是一个
var fs=require('fs');

var rs=fs.createReadStream('./name.txt',{
    hightWaterMark:1,
    encoding:null,
    start:0,
    end:2
});
//rs不是读取到的数据  而是一个可读流的对象

//encoding:null
//hightWaterMark  默认最高水位  一次读取的最大量
//start  从哪个字节开始读
//end    到这个字节结束  包括该字节

//监听on data  事件将水管打开
var buffers=[];
rs.on('data',function(data){
    console.log(data); //buffer转换为字符串
    buffers.push(data)
});

rs.on('end',function(){
    //获取好这个字
    console.log(Buffer.concat(buffers).toString())


});
//监听错误
rs.on('error',function(err){
    console.log(err)
})
