let map = require('../map.cjs');

const items = [1, 2, 3, 4, 5, 5];

function squire(element, index, array){
    if(element === undefined){
        return undefined;
    }else{
        return array[index]**2;
    }
}

let result = map(items,squire);

console.log(result);