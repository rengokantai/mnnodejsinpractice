/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
function tick() {
    console.log('tick:', Date.now());
}

function tock() {
    console.log('tock:', Date.now());
}

setInterval(tick, 1000);
console.log('tock:mm', Date.now());
setTimeout(function() { //<co id="callout-globals-setinterval" />
    setInterval(tock, 1000);
},5000);