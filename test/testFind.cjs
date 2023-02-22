let find = require('../find.cjs');

const items = [1, 2, 3, 4, 5, 5];

function evenValue(array, index) {
    if (array[index] % 2 === 0) {
        return true;
    }
}

let result = find(items, evenValue);

console.log(result);