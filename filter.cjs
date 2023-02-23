function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test

    let initialLength = elements.length;

    let filteredArray = [];

    if(Array.isArray(elements) === false ){
        return undefined;
    }else{
        for(let index = 0; index < initialLength; index++){
            let response = cb(elements[index], index, elements);
            if(response === true){
                filteredArray.push(elements[index]);
            }else{
                continue;
            }
        }
        return filteredArray;
    }
}

module.exports = filter;