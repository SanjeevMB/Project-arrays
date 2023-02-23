let filter = require('../filter.cjs');

const items = [1, 2, 3, 4, 5, 5];

function oddValues(element, index, array){
    if(element % 2 !== 0|| array[index] % 2 !== 0 ){
        return true;
    }else{
        return false;
    }
}

let result = filter(items, oddValues);

console.log(result);