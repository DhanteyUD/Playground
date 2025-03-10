//* Implement a function that removes duplicates from an array.

/**
 * Using Set:
 * @param {*} array 
 * @returns 
 */
function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)]
}

/**
 * Using filter: 
 * @param {*} arr 
 * @returns 
 */
function removeDuplicatesWithFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

/**
 * Using reduce:
 * @param {*} arr 
 * @returns 
 */
function removeDuplicatesWithReduce(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

/**
 * Using for loop:
 * @param {*} arr 
 * @returns 
 */
function removeDuplicatesWithForLoop(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log("with Set:", removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5]))
console.log("with filter:", removeDuplicatesWithFilter([1, 2, 2, 3, 4, 4, 5]))
console.log("with reduce:", removeDuplicatesWithReduce([1, 2, 2, 3, 4, 4, 5]))
console.log("with for loop:", removeDuplicatesWithForLoop([1, 2, 2, 3, 4, 4, 5]))