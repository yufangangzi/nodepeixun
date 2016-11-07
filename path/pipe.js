
var fs=require('fs');
function copy(src,target){
    var rs=fs.createReadStream(src,{highWaterMark:4});
    var ws=fs.createWriteStream(target,{highWaterMark:1});
    rs.pipe(ws);//将可读流中的内容  导入到可写流中

}
copy('./name.txt','./name1.txt');
