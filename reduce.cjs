function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

    let initialLength = elements.length;

    let finalValue = startingValue;

    if(finalValue === undefined){
        finalValue = elements[0];
    }

    for (let index = 0; index < initialLength; index++) {
        let updatedValue = cb(finalValue, elements[index]);
        if(updatedValue === undefined){
            continue;
        }else{
            finalValue = updatedValue;
        }
    }
    return finalValue;
}

module.exports = reduce;