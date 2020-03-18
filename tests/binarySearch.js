var bs = require("binary-search");
 
const MAX_SIZE = 10000000;

function constructOrderedArray(size){
    var set = [];
    for(let i = 0; i <= size; i++){
        if(Math.random() > .25){
            set.push(i)
        }
    }
    return set
}

var orderedSet = constructOrderedArray(MAX_SIZE)
var findNum = Math.floor(Math.random() * MAX_SIZE)

console.log(Date.now())
var x4 = orderedSet.indexOf(findNum)
console.log(Date.now())

console.log(Date.now())
var x3 = bs(orderedSet, findNum, function(element, needle) { return element - needle; });
console.log(Date.now())



console.log(findNum)
console.log(x3)
console.log(x4)