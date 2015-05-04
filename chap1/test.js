/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
var assert =require('test');
var CountStream = require('./countstream');
var countstream = new CountStream('example');

var fs =require('fs');
var passed = 0;

countstream.on('total', function(count){
    assert.equal(count,1);
    passed++;
});


fs,createReadStream(__filename).pipe(countStream);

process.on('exit',function(){
    console.log('Assertion;',passed);
});