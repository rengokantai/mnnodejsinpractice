/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
var myClass =require('./myClass');
var module2 =require('./module-2');
//delete require.cache[require.resolve('./myClass')];
console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());