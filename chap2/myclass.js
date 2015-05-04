/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */


function MyClass(){}

MyClass.prototype={
    method:function(){
        return 'Hello';
    }
};

var myClass = new MyClass();

module.exports = myClass;
