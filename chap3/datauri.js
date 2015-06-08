/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
var fs =require('fs');
var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync('./monkey.png').toString(encoding);

var uri = mime + " "+encoding+" " +data;
console.log(uri);
//

