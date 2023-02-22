let each = require('../each.cjs');

const items = [1, 2, 3, 4, 5, 5];

function print(array, index) {
    console.log(array[index] * 3);
}

let result = each(items, print);

console.log(result);