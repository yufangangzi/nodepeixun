var path=require('path');

var  str='a/b';
//获取当前文件夹的 __dirname

//console.log(path.join(__dirname,'a/b'));
//要求根据一个存放的路径解析一个绝对路径
//require.resolve('./2.js');
//解析路基的方法 文件的路径可以不在
console.log(path.resolve('100.js'));

//获取当前路径
console.log(path.resolve(__dirname));


