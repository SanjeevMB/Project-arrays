let map = require('../map.cjs');

const items = [1, 2, 3, 4, 5, 5];

function squire(element, index, array) {
    return element ** 2;
}

let result = map(items, squire);

console.log(result);