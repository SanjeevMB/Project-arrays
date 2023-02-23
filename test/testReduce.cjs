let reduce = require('../reduce.cjs');

const items = [1, 2, 3, 4, 5, 5];

let initialValue = 0;

function totalSum(accumulator, element) {
    if (element === undefined) {
        return undefined;
    } else {
        return accumulator + element;
    }
}

let result = reduce(items, totalSum, initialValue);

console.log(result);