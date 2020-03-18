var bs = require("binary-search");

//var set = ["abe", "what", "me", "hello", "try", "hi", "goodbye"]

// function sort_unique(arr) {
//     if (arr.length === 0) return arr;
//     arr = arr.sort(function (a, b) { return a*1 - b*1; });
//     var ret = [arr[0]];
//     for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
//       if (arr[i-1] !== arr[i]) {
//         ret.push(arr[i]);
//       }
//     }
//     return ret;
//   }

// var set = sort_unique([4,1,7,12,2,45,12,12,12])

// console.log(set)

// var el = bs(set,1, function(element, needle) {
//     console.log("element: " + element)
//     console.log("needle: " + needle) 
//     return element - needle 
// })

// console.log(el)

module.exports = class Index {
    constructor(){
        this.index = {}
    }

    addDocument(docId, tokenStemTextArray){
        tokenStemTextArray.forEach((stem, i) => {
            
            //first see if stem exists in index, if dosent add it
            if(!this.index[stem]){
                //console.log("adding new stem: " + stem)
                this.index[stem] = new UniqueOrderedArray()
            }

            this.index[stem].add(docId)

        })
    }

}

class UniqueOrderedArray {
    constructor(){
        this.arr = []
    }

    add(addingVal){
        var index = -1

        for(var i = 0; i < this.arr.length; i++){
            if(this.arr[i] == addingVal) return
            else if(this.arr[i] > addingVal){
                this.arr.splice(i, 0, addingVal)
                return
            }
        }   

        if(index == -1 || this.arr.length == 0){
            this.arr.push(addingVal)
            return
        }
    }

    //this function should only be used if something is broken
    sort_unique(arr) {
        var arr = this.arr
        if (arr.length === 0) return arr
        arr = arr.sort(function (a, b) { 
            return a*1 - b*1
        })

        var ret = [arr[0]]
        for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
          if (arr[i-1] !== arr[i]) {
            ret.push(arr[i])
          }
        }

        return ret
      }
}