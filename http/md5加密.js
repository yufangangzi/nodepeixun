//md5 是一种摘要算法
//1.不可逆
//2不同的内容  生成的md5肯定不一样
//3不同的长度文件 产胡的长度是一样的

var crypto=require('crypto');

//console.log(crypto.getHashes());

//111加密

console.log(crypto.createHash('md5').update('123456').digest('hex'));//16进制
console.log(crypto.createHash('md5').update('123456').digest('base64'));