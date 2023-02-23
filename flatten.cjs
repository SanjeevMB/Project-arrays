let flattenArray = [];

function flatten(elements, dep) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    let depth = dep;
    if(depth === undefined){
        depth = 1;
    }
    if(Array.isArray(elements) === false){
        return undefined;
    }else{
        for(let index = 0; index < elements.length; index++){
            if(Array.isArray(elements[index]) === true && depth !== 0){
                flatten(elements[index], depth - 1);
            }else if(Array.isArray(elements[index]) === false){
                flattenArray.push(elements[index]);
            }else if(Array.isArray(elements[index]) === true && depth === 0){
                flattenArray.push(elements[index]);
            }else{
                continue;
            }
        }
        return flattenArray;
    }
}

module.exports = flatten;