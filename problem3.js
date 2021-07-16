//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
var object = { name: 'ISRO', age: 35, role: 'Scientist' };

function convertObjectToList(obj) {
    let res = [];
    for (const key in obj) {
        res.push([key, obj[key]]);
    }
    return res;
}

console.log(convertObjectToList(object));