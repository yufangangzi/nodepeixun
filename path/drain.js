var  fs=require('fs');

var ws=fs.createWriteStream('./2.txt',{
    highWaterMark:3//默认是16k
});
var index=0;
function w(){
    var flag=true;
    while(flag&&index<10){
        flag=ws.write(''+index++)
    }
}
w();
ws.on('drain',function(){
    console.log('吃完了');
    w()
});
