/**
 * Created by Hernan Y.Ke on 2015/5/3.
 */
process.stdin.resume(); //<co id="callout-globals-stdout-1" />
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
    process.stdout.write(text.toUpperCase()); //<co id="callout-globals-stdout-2" />
});