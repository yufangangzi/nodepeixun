/**
 * Created by Administrator on 2016/11/6.
 */
var fs=require('fs');
//如果文件不存在  创建文件默认写入为UTF8模式

//ws为可写流
var ws=fs.createWriteStream('./1.txt',{
    highWaterMark:1//默认是16k
});
//写的内容必须是字符转和buffer
var flag=ws.write('hello',function(){
    console.log('写完了')
});
//消化后执行的方法  drain方法  抽干方法
ws.on('drain',function(){
    console.log('吃饱了 继续吃吧')
    ws.end()
})
console.log(flag);//表示写完这次还能不能继续写

//ws.end('word');//调用end方法  就会把所有的内容全部捡起来  并且把end里面的东西一起 写入