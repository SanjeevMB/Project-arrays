function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

    let finalValue = startingValue;

    if (elements.length === 0 && finalValue === undefined) {
        return undefined;
    } else if (elements.length === 0 && finalValue !== undefined) {
        return finalValue;
    } else if (Array.isArray(elements) === false || cb === undefined) {
        return undefined;
    } else {
        for (let index = 0; index < elements.length; index++) {
            if (index === 0 && finalValue === undefined) {
                finalValue = elements[index];
            } else {
                let updatedValue = cb(finalValue, elements[index], index, elements)
                if (updatedValue === undefined) {
                    continue;
                } else {
                    finalValue = updatedValue;
                }
            }
        }
        return finalValue;
    }
}

module.exports = reduce;