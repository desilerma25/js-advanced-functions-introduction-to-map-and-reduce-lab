// Your code here

// map returns new array AFTER doing work on each element
function mapToNegativize(sourceArray) {
    // let negatives = sourceArray.map(element => element * -1);
    // return negatives
    let negativeArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        negativeArray.push(sourceArray[i] * -1)
    }
    return negativeArray
}

function mapToNoChange(sourceArray) {
    // returns array w/ all values neg
    // returns array w/ og 
    return sourceArray
}

function mapToDouble(sourceArray) {
    let doubleArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        doubleArray.push(sourceArray[i] * 2)
    }
    return doubleArray
}

function mapToSquare(sourceArray) {
    let squareArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        squareArray.push(sourceArray[i] ** 2)
        // double * is exponentiation 
    }
    return squareArray
}

// reduce essentially returns an aggregate value 
// should be given a starting point as arg

function reduceToTotal(sourceArray, startingPoint=0) {
    // needs a starting/default or else error occurs
    // returns running total w/o start point
    let total = startingPoint
    // returns running total w/ start point
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    // true when all values are truthy
    // false when ANY value is falsy
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) // if any elements is returns false cut off function and return false 
        return false
    }
    return true // if all elements make it here, means none returned false, AKA all are true
}

function reduceToAnyTrue(sourceArray) {
    // true if ANY are true
    // return false when ALL are false
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])
        return true
    }
    return false
}