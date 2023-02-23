let flatten = require('../flatten.cjs');

const nestedArray = [1, [2], [[3]], [[[4]]]];

let result = flatten(nestedArray, 3);

console.log(result);