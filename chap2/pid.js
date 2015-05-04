/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */

//Run  echo xxxxx | node pid.js
process.stdin.resume(); //<co id="listing-globals-signals-1" />

process.on('SIGHUP', function () { //<co id="listing-globals-signals-2" />
    console.log('Reloading configuration...');
});

console.log('PID:', process.pid);
