function flatten(elements, depth) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    if(depth === undefined){
        depth = 1;
    }

    let flattenArray = [];

    if(Array.isArray(elements) === false){
        return [];
    }else{
        for(let index = 0; index < elements.length; index++){
            if(Array.isArray(elements[index]) === true && depth !== 0){
                flattenArray = flattenArray.concat(flatten(elements[index], depth - 1));
            }else if(elements[index] === undefined || elements[index] === null){
                continue;
            }else{
                flattenArray.push(elements[index]);
            }
        }
        return flattenArray;
    }
}

module.exports = flatten;