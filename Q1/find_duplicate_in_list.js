'use strict'

if(process.argv.length > 3){
    console.log('too many arguments');
    return;
}

let origin_list = JSON.parse(process.argv[2]); //parse list

let counts = origin_list //find counts of elements
.map((name) => {
  return {count: 1, name: name}
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})

let duplicates = Object.keys(counts).filter((a) => counts[a] > 1) // filter the elements whose count is greater than 1

console.log(duplicates);