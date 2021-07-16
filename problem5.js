/*
    Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
*/

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
    const res = {};

    arr.forEach(item => {
        let key = item[0];
        let val = item[1];
        res[key] = val;
    });

    return res;
}

console.log(fromListToObject(arr));