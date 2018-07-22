'use strict'

if(process.argv.length > 3){
    console.log('too many arguments');
    return;
}

let origin_list = JSON.parse(process.argv[2]); //parse list

var iter = 0;
function counter() {
    if(iter >= origin_list.length){
        return;
    }
    console.log(origin_list[iter++]);
    setTimeout(counter, 1000);
}

counter();
