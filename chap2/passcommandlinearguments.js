/**
* Created by Hernan Y.Ke on 2015/5/3.
*/

var args={
    '-h':displayHelp,
    '-r':readFile
};


function displayHelp(){
    console.log('Argument processor: ',args);
}


function readFile(file){
    console.log('Reading: ',file);
    require('fs').createReadStream(file).pipe(process.stdout);
}


if(process.argv.length > 0){
    process.argv.forEach(function(arg,index){
        args[arg].apply(this,process.argv.slice(index + 1));
    });
}