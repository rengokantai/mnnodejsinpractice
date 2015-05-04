/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */

var EventEmitter = require('events').EventEmitter;

function complexOperations(){
    var events = new EventEmitter();

    process.nextTick(function(){
        events.emit('success');
    });

    return events;
}

complexOperations().on('success',function(){
    console.log('success');
})