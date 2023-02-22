function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    for (let index = 0; index < elements.length; index++) {
        let response = cb(elements, index);
        if (response === true) {
            return elements[index];
        } else {
            continue;
        }
    }
    return undefined;
}

module.exports = find;