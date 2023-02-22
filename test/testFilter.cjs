let filter = require('../filter.cjs');

const items = [1, 2, 3, 4, 5, 5];

function oddValues(array, index){
    if(array[index] % 2 !== 0){
        return true;
    }else{
        return false;
    }
}

let result = filter(items, oddValues);

console.log(result);