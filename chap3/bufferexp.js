/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
var fs =require('fs');

fs.readFile('./name.txt',function(err,buf){
    console.log(Buffer.isBuffer(buf));
    console.log(buf.toString());//default UTf-8
    console.log(buf.toString('ascii'));
});