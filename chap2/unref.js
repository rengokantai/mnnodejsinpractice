/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
function monitor() {
    console.log(process.memoryUsage());
}

var id = setInterval(monitor, 1000);
id.unref(); //<co id="callout-globals-setinterval-unref" />

setTimeout(function() {
    console.log('Done!');
}, 5000);