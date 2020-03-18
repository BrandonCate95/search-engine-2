const add = require('../build/Release/add');

console.log('This should be eight:', add.add(3, 5));

function add_node(x,y){
    return x + y;
}

var scale = Math.random() * 10000000

var start_time = Date.now()
for(let i = 0; i < 100000000; i++){
    add_node(Math.random()*scale,Math.random()*scale)
}
console.log(Date.now() - start_time)

start_time = Date.now()
add.add(Math.random()*scale,Math.random()*scale)
console.log(Date.now() - start_time)